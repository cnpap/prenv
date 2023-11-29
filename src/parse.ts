import path from 'node:path';
import dotenv from 'dotenv';
import * as fs from 'fs';
import minimist from 'minimist';

export const getArgs = () => {
  const args = minimist(process.argv.slice(2));
  const dir = args.dir as string;
  const name = args.name as string;
  const commands = args._ as string[];
  const output = args.output as string;

  return {
    dir,
    name,
    commands: commands.join(' '),
    output
  };
};

export const getNamedEnvValues = (name: string, dir: string) => {
  const parsed = {};
  const envPathname = path.join(dir, '.env');
  const namedPathname = envPathname + `.${name}`;
  const localPathname = envPathname + '.local';
  const localNamedPathname = namedPathname + '.local';

  for (const pathname of [envPathname, namedPathname, localPathname, localNamedPathname]) {
    try {
      const parsedEnv = dotenv.config({ path: pathname }).parsed;
      Object.assign(parsed, parsedEnv);
    } catch (error) {
      throw new Error(`读取 ${pathname} 文件失败`);
    }
  }

  return parsed;
};

export const getEnvValues = (dir: string) => {
  const envFiles = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('.env')) {
      envFiles.push(file);
    }
  }
  const parsed = {};
  for (const file of envFiles) {
    const pathname = path.join(dir, file);
    try {
      const parsedEnv = dotenv.config({ path: pathname }).parsed;
      Object.assign(parsed, parsedEnv);
    } catch (error) {
      throw new Error(`读取 ${pathname} 文件失败`);
    }
  }
  return parsed;
};
