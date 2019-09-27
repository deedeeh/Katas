const getMiddle = require('./getMiddle');

test('if the word is test return the 2 middle letters "es"', () => {
  expect(getMiddle("test")).toBe("es");
});

test('if the word is middle return the 2 middle letters "dd', () => {
  expect(getMiddle("middle")).toBe("dd");
});

test('if the word is career return the 2 middle letters "re', () => {
  expect(getMiddle("career")).toBe("re");
});

test('if the word\'s length is even return the middle 2 characters', () => {
  expect(getMiddle("friend")).toBe("ie");
});