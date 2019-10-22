let lastMove = "O"
const tictactoe = (move) => {
  if(lastMove !== move && move !== undefined) {
    lastMove = move
    return true
  } 
  return false
}

module.exports = tictactoe