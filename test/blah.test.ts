import { sum, times, divide } from '../src';

describe('tests', () => {
  it('sum', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('times', () => {
    expect(times(2, 3)).toEqual(6);
  });
  it('divide', () => {
    expect(divide(10, 2)).toEqual(5);
  });
});
