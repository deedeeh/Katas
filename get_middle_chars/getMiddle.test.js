const getMiddle = require('./getMiddle');

test('if the word is test return the middle 2 characters "es"', () => {
  expect(getMiddle("test")).toBe("es");
});

test('if the word is middle return the middle 2 characters "dd', () => {
  expect(getMiddle("middle")).toBe("dd");
});

test('if the word is career return the middle 2 characters "re', () => {
  expect(getMiddle("career")).toBe("re");
});

test('if the word\'s length is even return the middle 2 characters', () => {
  expect(getMiddle("friend")).toBe("ie");
});

test('if the word is testing return the middle character', () => {
  expect(getMiddle("testing")).toBe("t");
});

test('if the word is alone return the middle character', () => {
  expect(getMiddle("alone")).toBe("o");
});

test('if the word is leisure return the middle character', () => {
  expect(getMiddle("leisure")).toBe("s");
});