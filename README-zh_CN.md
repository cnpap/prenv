[English](./README.md) | 中文

## ✨ 功能清单

- ❄️ 将环境变量 env.d.ts 文件生成到指定目录
- 💥 启动时初始化环境环境变量

## 📦 安装

```bash
npm install prenv
```

```bash
yarn add prenv
```

```bash
pnpm add prenv
```

## 💫 将环境变量 env.d.ts 文件生成到指定目录

```
使用方法:

prenv-type --prenv-dir . --prenv-output ./types

// 或者生成到某个工作区应用

prenv-type --prenv-dir ./workspace/some-app --prenv-output ./workspace/some-app/types
```

在 package.json 中使用

```json
{
  "scripts": {
    "test": "prenv-type --prenv-dir . --prenv-output ./types"
  }
}
```

## 💫 启动时初始化环境环境变量

```
使用方法: 

prenv --prenv-dir . --prenv-name developer commands

// 在使用 vitest 时

prenv --prenv-dir . --prenv-name developer vitest

// 在使用 node 应用时

prenv --prenv-dir . --prenv-name developer node your-app.js

// 在使用 vite 时

prenv --prenv-dir . --prenv-name developer vite build
```

在 package.json 中使用

```json
{
  "scripts": {
    "test": "prenv --prenv-dir . --prenv-name developer vitest",
    "build": "prenv --prenv-dir . --prenv-name developer vite build",
    "start": "prenv --prenv-dir . --prenv-name developer node your-app.js"
  }
}
```

## 📖 命令行参数简化

| Name | Alias         |
|------|---------------|
| d    | development   |
| dev  | development   |
| t    | test          |
| p    | production    |
| prod | production    |

| Params         | Default |
|----------------|---------|
| --prenv-dir    | .       |
| --prenv-name   | d       |
| --prenv-output | .       |

现在你可以使用 `prenv d vitest` 甚至 `prenv vitest` 来启动你的 vitest 应用了
