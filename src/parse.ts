import path from 'node:path';
import dotenv from 'dotenv';
import * as fs from 'fs';
import minimist from 'minimist';

const nameAlias: Record<string, string> = {
  d: 'development',
  dev: 'development',
  t: 'test',
  test: 'test',
  p: 'production',
  prod: 'production'
};

export const getArgs = () => {
  const args = minimist(process.argv.slice(2));
  const dir = (args['prenv-dir'] as string) || '.';
  const name = (args['prenv-name'] as string) || 'd';
  const output = (args['prenv-output'] as string) || '.';
  let commands = process.argv.slice(2);

  const is: number[] = [];
  for (const [i, command] of commands.entries()) {
    if (['--prenv-dir', '--prenv-name', '--prenv-output'].includes(command)) {
      is.push(i);
      is.push(i + 1);
    }
  }
  commands = commands.filter((_, i) => !is.includes(i)).filter(item => !item.startsWith('--prenv'));

  return {
    args,
    dir,
    output,
    name: nameAlias[name] || name,
    commands: commands.join(' ')
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
