const sum = require('./sum');

test('suma de 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('suma de 5 + 10 + 15 es igual a 30', () => {
  expect(sum(5, 10, 15)).toBe(30);
});