#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { getArgs, getNamedEnvValues } from './parse';
import path from 'node:path';

const { name, dir, commands } = getArgs();
const parsed = getNamedEnvValues(name, path.join(process.cwd(), dir));

execSync(commands, {
  stdio: 'inherit',
  env: parsed,
  cwd: process.cwd()
});
