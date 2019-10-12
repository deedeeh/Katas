const rover = (x, y, direction, commands) => {
  let newXCoordinate = x;
  let newYCoordinate = y; 
  if(direction === "E" && commands === "L" || direction === "W" && commands === "L") {
    newYCoordinate = y + commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  } else if(direction === "E" && commands === "R" || direction === "W" && commands === "R") {
    newYCoordinate = y - commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  }
  if(direction === "N" && commands === "L" || direction === "S" && commands === "L") {
    newXCoordinate = x - commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  } else if(direction === "N" && commands === "R" || direction === "S" && commands === "R") {
    newXCoordinate = x + commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  }

  if(direction === "N") {
    newYCoordinate = y + commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  } else if(direction === "E") {
    newXCoordinate = x + commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  } else if(direction === "W") {
    newXCoordinate = x - commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  }  else if(direction === "S") {
    newYCoordinate = y - commands.length
    return `${newXCoordinate}:${newYCoordinate}:${direction}`
  }
}

module.exports = rover