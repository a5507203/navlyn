import { describe, expect, it } from 'vitest';
import { browserRouterFuture } from './routerConfig';

describe('browser router transitions', () => {
  it('keeps revealed route content visible while the next lazy route loads', () => {
    expect(browserRouterFuture.v7_startTransition).toBe(true);
  });
});
