import { getArgs, getEnvValues } from './parse';
import * as fs from 'fs';
import path from 'node:path';

const { dir, output } = getArgs();
const parsed = getEnvValues(dir);

const typeTemplate = `
/* eslint-disable */
// noinspection JSUnusedGlobalSymbols

declare module 'process' {
  global {
    // noinspection ES6ConvertVarToLetConst
    var process: NodeJS.Process;
    namespace NodeJS {
      export interface ProcessEnv {
{{#each parsed}}
      }
    }
  }
}
`;

const type = typeTemplate.replace(
  '{{#each parsed}}',
  Object.keys(parsed)
    .map(key => `        ${key}: string;`)
    .join('\n')
);

const typesDir = path.join(process.cwd(), output);
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir);
}
const typeFilename = path.join(typesDir, 'env.d.ts');

try {
  console.log(`Writing ${typeFilename} file...`);
  fs.writeFileSync(typeFilename, type);
} catch (error) {
  throw new Error(`写入 ${typeFilename} 文件失败`);
}
