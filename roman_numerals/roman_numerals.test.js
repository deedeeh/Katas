const convert = require('./roman_numerals');

test('if 1 return "I"', () => {
  expect(convert(1)).toBe("I");
});

test('if 2 return "II', () => {
  expect(convert(2)).toBe("II");
});

test('if 3 return "III', () => {
  expect(convert(3)).toBe("III");
});

