const rover = (x, y, direction, commands) => {
  let newXCoordinate = x;
  let newYCoordinate = y; 
  if(direction === "E" && commands === "L" || direction === "W" && commands === "L") {
    return `${newXCoordinate}:${newYCoordinate}:N`
  } else if(direction === "E" && commands === "R" || direction === "W" && commands === "R") {
    return `${newXCoordinate}:${newYCoordinate}:S`
  } else if(direction === "N" && commands === "L" || direction === "S" && commands === "L") {
    return `${newXCoordinate}:${newYCoordinate}:W`
  } else if(direction === "N" && commands === "R" || direction === "S" && commands === "R") {
    return `${newXCoordinate}:${newYCoordinate}:E`
  }

  if(direction === "N") {
    newYCoordinate = y + commands.length
  } else if(direction === "E") {
    newXCoordinate = x + commands.length
  } else if(direction === "W") {
    newXCoordinate = x - commands.length
  }  else if(direction === "S") {
    newYCoordinate = y - commands.length
  }
  return `${newXCoordinate}:${newYCoordinate}:${direction}`
}

module.exports = rover