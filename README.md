# Http helpers

[![npm version](https://badge.fury.io/js/%40toruslabs%2Fhttp-helpers.svg)](https://badge.fury.io/js/%40toruslabs%2Fhttp-helpers)
![npm](https://img.shields.io/npm/dw/@toruslabs/http-helpers)

## Introduction

- This package allows you to call http methods with pre defined configs. Uses fetch or node-fetch internally
- Adds support for api keys
- Works in both browser and node.js environments

## Installation

### Bundling

This module is distributed in two formats:

- `lib.esm` at `dist/lib.esm/index.js`
- `lib.cjs` at `dist/lib.cjs/index.js`

Both builds import `loglevel`. They are not standalone browser scripts, so a `<script>` tag on the jsDelivr or unpkg URL will not run the package. Use a bundler, or Node `import` / `require`.

## Usage

Add [`@toruslabs/http-helpers`](https://www.npmjs.com/package/@toruslabs/http-helpers) to your project:

```ts
import { get, post } from "@toruslabs/http-helpers";
```

```js
const { get, post } = require("@toruslabs/http-helpers");
```

## Requirements

- Node 24.22 or newer
