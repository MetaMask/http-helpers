import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const marker = "exports.default = exports.minimatch;";
const packageJsonPath = require.resolve("minimatch/package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

if (packageJson.version !== "11.0.3") {
  throw new Error(`Expected minimatch 11.0.3, found ${packageJson.version ?? "unknown"}`);
}

const entryPath = join(dirname(packageJsonPath), "dist/commonjs/index.js");
let source = readFileSync(entryPath, "utf8");

if (source.includes(marker)) {
  process.exit(0);
}

const hasFunctionExport = source.includes("exports.minimatch = minimatch;");
const hasClassOnFunction = source.includes("exports.minimatch.Minimatch = Minimatch;");

if (!hasFunctionExport || !hasClassOnFunction) {
  throw new Error("minimatch CJS build is not the expected 11.0.3 layout");
}

const sourceMap = "//# sourceMappingURL=index.js.map";
if (source.includes(sourceMap)) {
  source = source.replace(sourceMap, `${marker}\n${sourceMap}`);
} else {
  source = source.endsWith("\n") ? source : `${source}\n`;
  source = `${source}${marker}\n`;
}

writeFileSync(entryPath, source);
