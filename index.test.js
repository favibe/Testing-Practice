import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';

describe('capitalize', () => {
  test('capitalizes first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
  });
  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe('caesarCipher', () => {
  test('shifts letters correctly', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('xyz', 3)).toBe('abc'); 
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('keeps punctuation unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

describe('analyzeArray', () => {
  test('returns correct statistics', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});
