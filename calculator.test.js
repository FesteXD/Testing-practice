import { calculator } from './calculator';

it('Add', () => {
  expect(calculator.add(5, 10)).toBe(5 + 10);
});
it('Subtract', () => {
  expect(calculator.sub(5, 10)).toBe(5 - 10);
});
it('Divide', () => {
  expect(calculator.div(5, 0)).toBe(5 / 0);
});
it('Multiply', () => {
  expect(calculator.mul(-5.23, 10)).toBe(-5.23 * 10);
});
