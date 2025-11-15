const { capitalize, reverseString } = require('./index');

test('capitalize first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
