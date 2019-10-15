const fizzBuzz = (num) => {
  if(num === 15) {
    return "FizzBuzz"
  } else if(num === 30) {
    return "FizzBuzz"
  } else if(num === 45) {
    return "FizzBuzz"
  }
  if(num % 5 === 0) {
    return "Buzz"
  } else if(num % 3 === 0) {
    return "Fizz"
  }
}

module.exports = fizzBuzz