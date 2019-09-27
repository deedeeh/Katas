const getMiddle = (s) => {
  const wordsLength = s.length;
  const lengthDivisibleBy2 = wordsLength / 2;
  const chars = s.split('');
  if(wordsLength % 2 === 0) {
    return chars.splice(lengthDivisibleBy2 - 1, 2).join('');
  }
}

module.exports = getMiddle;