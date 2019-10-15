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

test('number 20 should return "Buzz', () => {
  expect(fizzBuzz(20)).toBe("Buzz")
});

test('if number is multiple of 5 return "Buzz"', () => {
  expect(fizzBuzz(100)).toBe("Buzz")
});

test('number 15 should return "FizzBuzz"', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz")
});

test('number 30 should return "FizzBuzz"', () => {
  expect(fizzBuzz(30)).toBe("FizzBuzz")
});

test('number 45 should return "FizzBuzz"', () => {
  expect(fizzBuzz(45)).toBe("FizzBuzz")
});

test('if number is multiple of 3 and 5 return "FizzBuzz', () => {
  expect(fizzBuzz(120)).toBe("FizzBuzz")
});

test('if number is not multiple of 3 or 5 throw error message', () => {
  expect(fizzBuzz(176)).toBe("Sorry this number is not multiple of 3 or 5")
});

