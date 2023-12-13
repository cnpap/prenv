English | [中文](./README-zh_CN.md)

## ✨ Feature List

- ❄️ generate the `env.d.ts` file for environment variables into a specified directory
- 💥 initialize environment variables at startup

## 📦 Installation

```bash
npm install prenv
```

```bash
yarn add prenv
```

```bash
pnpm add prenv
```

## 💫 Generate the `env.d.ts` File for Environment Variables into a Specified Directory

```
Usage:

prenv-type --prenv-dir . --prenv-output ./types

// or generate to some workspace app

prenv-type --prenv-dir ./workspace/some-app --prenv-output ./workspace/some-app/types
```

using in package.json

```json
{
  "scripts": {
    "test": "prenv-type --prenv-dir . --prenv-output ./types"
  }
}
```

## 💫 Initialize Environment Variables at Startup

```
Usage: 

prenv --prenv-dir . --prenv-name developer commands

// using for vitest

prenv --prenv-dir . --prenv-name developer vitest

// using for some node app

prenv --prenv-dir . --prenv-name developer node your-app.js

// using for vite

prenv --prenv-dir . --prenv-name developer vite build
```

using in package.json

```json
{
  "scripts": {
    "test": "prenv --prenv-dir . --prenv-name developer vitest",
    "build": "prenv --prenv-dir . --prenv-name developer vite build",
    "start": "prenv --prenv-dir . --prenv-name developer node your-app.js"
  }
}
```

| Name | Alias         |
|------|---------------|
| d    | development   |
|dev   | development   |
| t    | test          |
| p    | production    |
|prod  | production    |

| v2 Params      | Default     |
|----------------|-------------|
| --prenv-dir    | .           |
| --prenv-name   | development |
| --prenv-output | .           |

