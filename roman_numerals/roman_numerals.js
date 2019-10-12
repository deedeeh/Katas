const convert = (number) => {
  let result = '';
  const numeralsObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  for(let key in numeralsObj) {
    if(number >= numeralsObj[key]) {
      result += key.repeat(Math.trunc(number / numeralsObj[key]))
      number -= numeralsObj[key] * Math.trunc(number / numeralsObj[key])
    }
  }
  return result;
}

module.exports = convert;