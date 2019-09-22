const index = (year) => {
  if(year == 1992) {
    return true;
  } else if(year == 1996) {
    return true;
  } else if(year == 2000) {
    return true;
  }
  return false;
}

module.exports = index;