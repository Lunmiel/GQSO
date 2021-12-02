const { Router } = require('./soma.js');

test('Um mais dois é igual a três', () => {
  const params = { num1: 1, num2: 2 };
  expect(soma(params)).toBe(3);
});