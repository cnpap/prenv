#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { getArgs, getNamedEnvValues } from './parse.js';
import path from 'node:path';

const { name, dir, commands } = getArgs();
const parsed = getNamedEnvValues(name, path.join(process.cwd(), dir));

try {
  execSync(commands, {
    stdio: 'inherit',
    env: parsed,
    cwd: process.cwd()
  });
} catch (_) {
  // 避免输出自身报错堆栈，因为这样会让用户误以为是 prenv 报错
  process.exit(1);
}
