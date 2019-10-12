const rover = (x, y, direction, commands) => {
  let newXCoordinate;
  let newYCoordinate; 
  if(direction === "N") {
    newYCoordinate = y + commands.length
    return `${x}:${newYCoordinate}:${direction}`
  } else if(direction === "E") {
    newXCoordinate = x + commands.length
    return `${newXCoordinate}:${y}:${direction}`
  } else if(direction === "W") {
    newXCoordinate = x - commands.length
    return `${newXCoordinate}:${y}:${direction}`
  }  else if(direction === "S") {
    newYCoordinate = y - commands.length
    return `${x}:${newYCoordinate}:${direction}`
  }
}

module.exports = rover