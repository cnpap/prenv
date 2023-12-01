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

prenv-type --dir . --output ./types

// or generate to some workspace app

prenv-type --dir ./workspace/some-app --output ./workspace/some-app/types
```

using in package.json

```json
{
  "scripts": {
    "test": "prenv-type --dir . --output ./types"
  }
}
```

## 💫 Initialize Environment Variables at Startup

```
Usage: 

prenv --dir . --name developer commands

// using for vitest

prenv --dir . --name developer vitest

// using for some node app

prenv --dir . --name developer node your-app.js

// using for vite

prenv --dir . --name developer vite build
```

using in package.json

```json
{
  "scripts": {
    "test": "prenv --dir . --name developer vitest",
    "build": "prenv --dir . --name developer vite build",
    "start": "prenv --dir . --name developer node your-app.js"
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

| Params   | Default     |
|----------|-------------|
| --dir    | .           |
| --name   | development |
| --output | .           |

