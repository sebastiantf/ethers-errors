import { Greeter } from '../../src/lib/greeter';

describe('Greeter', () => {
  it('should return greeting text', () => {
    expect(Greeter('Carl')).toBe('Hello Carl! 👋');
  });
});
