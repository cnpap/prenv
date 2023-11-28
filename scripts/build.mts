import path from 'node:path';
import { globbyStream } from 'globby';
import { build as esbuild } from 'esbuild';

const srcPath = path.join(process.cwd(), 'src');
const distPath = path.join(process.cwd(), 'dist');

async function buildFile(filePath: string) {
  return esbuild({
    platform: 'node',
    target: 'node16',
    format: 'esm',
    allowOverwrite: true,
    minify: false,
    nodePaths: [srcPath],
    external: [],
    entryPoints: [path.join(srcPath, filePath)],
    outdir: path.join(distPath, path.dirname(filePath))
  });
}

/**
 * 因为将多个文件编译为单个文件可能造成路径冲突
 * 所以在这里我们分别编译每个文件
 *
 * 如有需求，需要将多个文件编译为单个文件
 * 请对函数进行改造
 */
async function build() {
  const filesStream = globbyStream(['**/*.ts', '!**/*.spec.ts'], {
    cwd: srcPath,
    onlyFiles: true,
  });
  for await (const filePath of filesStream) {
    await buildFile(filePath as string);
  }
}

build().catch(console.error)
