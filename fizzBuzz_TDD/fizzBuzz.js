const fizzBuzz = (num) => {
  if(num % 5 === 0) {
    return "Buzz"
  } else if(num % 3 === 0) {
    return "Fizz"
  }
}

module.exports = fizzBuzz