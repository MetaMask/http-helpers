# @toruslabs/http-helpers

## 10.1.0

### Minor Changes

- 8f30e14: Allow `@sentry/core` v11 as an optional peer (`^10.x || ^11.x`).

### Patch Changes

- 91f9b6f: Remove unused `@babel/runtime` peer dependency after the Vite+ build migration.

## 10.0.0

### Major Changes

- 8235cdc: Require Node.js 24.22 and npm 12. Published CJS and ESM entry points stay the same. Type declarations are `dist/lib.cjs/index.d.ts` and `dist/lib.esm/index.d.ts`.

### Patch Changes

- 4443495: Merge request options with `@fastify/deepmerge`, which skips prototype-pollution keys.
