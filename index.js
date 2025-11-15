// Capitalize first letter
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Calculator object
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

// Caesar Cipher
function caesarCipher(str, shift) {
  const shiftChar = (char, shift) => {
    const isUpper = char === char.toUpperCase();
    const base = isUpper ? 65 : 97;

    const code = char.toLowerCase().charCodeAt(0);
    if (code < 97 || code > 122) return char; // non-letter

    return String.fromCharCode(((code - 97 + shift) % 26) + base);
  };

  return str
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

// Analyze Array
function analyzeArray(arr) {
  const sum = arr.reduce((a,b) => a+b, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray } 