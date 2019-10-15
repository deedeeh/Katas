const rover = (x, y, direction, commands) => {
  let newDirection = direction;
  let newXCoordinate = x;
  let newYCoordinate = y; 

  commands.split('').map(command => {
    switch(command) {
      case "M":
        switch(newDirection) {
          case "N":
            newYCoordinate += 1
            break;
          case "E":
            newXCoordinate += 1
            break;
          case "W":
            newXCoordinate -= 1
            break;
          default:
            newYCoordinate -= 1
            break;
        }
        break;
      case "L":
        newDirection === "E" || newDirection === "W" ? newDirection = "N" : newDirection = "W"
        break;
      case "R": 
        newDirection === "E" || newDirection === "W" ? newDirection = "S" : newDirection = "E"
        break;
    }
  }); 
  return `${newXCoordinate}:${newYCoordinate}:${newDirection}`
}

module.exports = rover