const fizzBuzz = require('./fizzBuzz');

test('number 3 should return "Fizz"', () => {
  expect(fizzBuzz(3)).toBe("Fizz")
});

test('number 6 should return "Fizz"', () => {
  expect(fizzBuzz(6)).toBe("Fizz")
});

test('number 9 should return "Fizz"', () => {
  expect(fizzBuzz(9)).toBe("Fizz")
});

test('if number is multiple of 3 return "Fizz"', () => {
  expect(fizzBuzz(324)).toBe("Fizz")
});

test('number 5 should return "Buzz', () => {
  expect(fizzBuzz(5)).toBe("Buzz")
});

test('number 10 should return "Buzz', () => {
  expect(fizzBuzz(10)).toBe("Buzz")
});

test('number 15 should return "Buzz', () => {
  expect(fizzBuzz(15)).toBe("Buzz")
});