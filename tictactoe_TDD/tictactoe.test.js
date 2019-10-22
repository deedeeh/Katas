const tictactoe = require('./tictactoe')

test('if not passing an argument return false', () => {
  expect(tictactoe()).toBe(false)
});

test('X should go first', () => {
  expect(tictactoe('X')).toBe(true)
});

test('O shouldn\'t go first', () => {
  tictactoe("O")
  expect(tictactoe('O')).toBe(false)
});

test('players must take turns', () => {
  tictactoe('X')
  expect(tictactoe('O')).toBe(true)
});
