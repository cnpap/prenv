import { describe, it, expect } from 'vitest';
import { add } from './demo';

describe('demo', () => {
  it('should add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
