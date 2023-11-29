### 💫 功能1: 从启动时初始化环境环境变量

```
Usage: 

prenv --dir . --name developer commands

参数解释
- directory: 环境变量所在目录 例如: . ./ ./src
- name: 环境变量名称 例如: developer test production
- commands: 启动命令 例如: node your-app.js
```

#### 用例

```json
{
  "scripts": {
    "test": "prenv --dir . --name developer vitest",
    "build": "prenv --dir . --name developer vite build",
    "start": "prenv --dir . --name developer node your-app.js"
  }
}
```

效果是从当前目录下(也可以是 ./src 或者其他目录)的 `.env` `.env.developer` `.env.developer.local` 文件中读取环境变量,然后执行 `node your-app.js`

---

### 💫 功能2: 将环境变量 env.d.ts 文件生成到指定目录

```
Usage:

prenv-type --dir . --output ./types

参数解释
- dir: 环境变量所在目录 例如: . ./ ./src
- output: 输出目录 例如: . ./ ./types
```

#### 用例

```json
{
  "scripts": {
    "test": "prenv-type --dir . --output ./types"
  }
}
```

效果是从当前目录下(也可以是 ./src 或者其他目录)的 `.env` `.env.developer` `.env.developer.local` 文件中读取环境变量,然后生成 `env.d.ts` 文件到 `./types` 目录下
