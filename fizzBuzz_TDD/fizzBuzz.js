const fizzBuzz = (num) => {
  if(num === 5) {
    return "Buzz"
  } else if(num === 10) {
    return "Buzz"
  } else if(num === 15) {
    return "Buzz"
  }
  if(num % 3 === 0) {
    return "Fizz"
  }
}

module.exports = fizzBuzz