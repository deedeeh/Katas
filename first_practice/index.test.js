const index = require('./index');

test('when year 1991 return false', () => {
  expect(index(1991)).toBe(false);
}); 

test('when year 1993 return false', () => {
  expect(index(1993)).toBe(false);
});

test('when year 1997 return false', () => {
  expect(index(1997)).toBe(false);
});

test('if 1992 return true', () => {
  expect(index(1992)).toBe(true);
});

test('if 1996 return true', () => {
  expect(index(1996)).toBe(true);
});

test('if 2000 return true', () => {
  expect(index(2000)).toBe(true);
});

test('if year is divisible by 4 return true', () => {
  expect(index(1996)).toBe(true);
});

test('when 1600 return true', () => {
  expect(index(1600)).toBe(true);
})

test('if year is divisible by 400 return true', () => {
  expect(index(1200)).toBe(true);
});