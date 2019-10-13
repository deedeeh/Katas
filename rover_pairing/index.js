const rover = (x, y, direction, commands) => {
  let newDirection = direction;
  let newXCoordinate = x;
  let newYCoordinate = y; 

  commands.split('').map(command => {
    if(command === "M") {
      if(newDirection === "N") {
        newYCoordinate += 1
      } else if(newDirection === "E") {
        newXCoordinate += 1
      } else if(newDirection === "W") {
        newXCoordinate -= 1
      }  else if(newDirection === "S") {
        newYCoordinate -= 1
      }
    } else if(command === "L") {
      if(newDirection === "E" || newDirection === "W") {
        newDirection = "N"
      } else if(newDirection === "N" || newDirection === "S") {
        newDirection = "W"
      } 
    } else if(command === "R") { 
        if(newDirection === "E" || newDirection === "W") {
          newDirection = "S"
      } else if(newDirection === "N" || newDirection === "S") {
        newDirection = "E"
      }
    } 
  }); 
  return `${newXCoordinate}:${newYCoordinate}:${newDirection}`
}

module.exports = rover