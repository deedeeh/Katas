const convert = require('./roman_numerals');

test('if 1 return "I"', () => {
  expect(convert(1)).toBe("I");
});

test('if 2 return "II"', () => {
  expect(convert(2)).toBe("II");
});

test('if 3 return "III"', () => {
  expect(convert(3)).toBe("III");
});

test('if 4 return "IV"', () => {
  expect(convert(4)).toBe("IV");
});

test('if 9 return "IX"', () => {
  expect(convert(9)).toBe("IX");
});

test('if 29 return "XXIX"', () => {
  expect(convert(29)).toBe("XXIX");
});

test('if 80 return "LXXX"', () => {
  expect(convert(80)).toBe("LXXX");
});

test('if 294 return "CCXCIV"', () => {
  expect(convert(294)).toBe("CCXCIV");
});

test('if 2019 return "MMXIX"', () => {
  expect(convert(2019)).toBe("MMXIX");
});







