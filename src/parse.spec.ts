import { describe, it, expect } from 'vitest';
import { getNamedEnvValues, getEnvValues } from './parse';
import path from 'node:path';

describe('parse', () => {
  it('should get named env values', () => {
    const pathname = path.join(__dirname, '../');
    const parsed = getNamedEnvValues('test', pathname);
    expect(parsed).toEqual({ K1: 'v1', K2: 'V2' });
  });
});

describe('parse all', () => {
  it('should get all env values', () => {
    const pathname = path.join(__dirname, '../');
    const parsed = getEnvValues(pathname);
    expect(parsed).toEqual({ K1: 'v1', K2: 'V2', K3: 'v3' });
  });
});
