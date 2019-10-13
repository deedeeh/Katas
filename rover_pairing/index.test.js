//"M" represents 1 step forward 
//"L" for left and "R" right

const rover = require('./index');

test('rover moves 1 step east', () => {
  expect(rover(1, 0, "E", "M")).toBe("2:0:E")
});

test('rover moves 2 steps east', () => {
  expect(rover(1, 0, "E", "MM")).toBe("3:0:E")
});

test('rover moves 3 steps east', () => {
  expect(rover(1, 0, "E", "MMM")).toBe("4:0:E")
});

test('rover moves 1 step east', () => {
  expect(rover(5, 2, "E", "M")).toBe("6:2:E")
});

test('rover moves 1 step north', () => {
  expect(rover(5, 2, "N", "M")).toBe("5:3:N")
});

test('rover moves 2 steps north', () => {
  expect(rover(5, 2, "N", "MM")).toBe("5:4:N")
});

test('rover moves 1 step west', () => {
  expect(rover(5, 2, "W", "M")).toBe("4:2:W")
});

test('rover moves 2 steps west', () => {
  expect(rover(5, 2, "W", "MM")).toBe("3:2:W")
});

test('rover moves 6 steps west', () => {
  expect(rover(5, 2, "W", "MMMMMM")).toBe("-1:2:W")
});

test('rover moves 1 step south', () => {
  expect(rover(2, 2, "S", "M")).toBe("2:1:S")
});

test('rover moves 2 steps south', () => {
  expect(rover(2, 4, "S", "MM")).toBe("2:2:S")
});

test('rover moves 9 steps south', () => {
  expect(rover(2, 6, "S", "MMMMMMMMM")).toBe("2:-3:S")
});

test('rover\' direction is east and it turns left', () => {
  expect(rover(0, 0, "E", "L")).toBe("0:0:N")
}); 

test('rover\' direction is east and it turns left', () => {
  expect(rover(3, 2, "E", "L")).toBe("3:2:N")
}); 

test('rover\' direction is east and it turns left', () => {
  expect(rover(5, 7, "E", "L")).toBe("5:7:N")
}); 

test('rover\' direction is east and it turns right', () => {
  expect(rover(2, 1, "E", "R")).toBe("2:1:S")
}); 

test('rover\' direction is east and it turns right', () => {
  expect(rover(0, 0, "E", "R")).toBe("0:0:S")
}); 

test('rover\' direction is east and it turns right', () => {
  expect(rover(10, 6, "E", "R")).toBe("10:6:S")
}); 

test('rover\' direction is west and it turns left', () => {
  expect(rover(1, 1, "W", "L")).toBe("1:1:N")
}); 

test('rover\' direction is west and it turns left', () => {
  expect(rover(4, 4, "W", "L")).toBe("4:4:N")
}); 

test('rover\' direction is west and it turns left', () => {
  expect(rover(2, 7, "W", "L")).toBe("2:7:N")
}); 

test('rover\' direction is west and it turns right', () => {
  expect(rover(5, 5, "W", "R")).toBe("5:5:S")
}); 

test('rover\' direction is west and it turns right', () => {
  expect(rover(2, 7, "W", "R")).toBe("2:7:S")
}); 

test('rover\' direction is west and it turns right', () => {
  expect(rover(9, 1, "W", "R")).toBe("9:1:S")
}); 

test('rover\' direction is north and it turns left', () => {
  expect(rover(3, 3, "N", "L")).toBe("3:3:W")
}); 

test('rover\' direction is north and it turns left', () => {
  expect(rover(9, 2, "N", "L")).toBe("9:2:W")
}); 

test('rover\' direction is north and it turns right', () => {
  expect(rover(8, 2, "N", "R")).toBe("8:2:E")
}); 

test('rover\' direction is north and it turns right', () => {
  expect(rover(5, 2, "N", "R")).toBe("5:2:E")
}); 

test('rover\' direction is south and it turns left', () => {
  expect(rover(8, 2, "S", "L")).toBe("8:2:W")
}); 

test('rover\' direction is south and it turns left', () => {
  expect(rover(2, 4, "S", "L")).toBe("2:4:W")
}); 

test('rover\' direction is south and it turns right', () => {
  expect(rover(2, 4, "S", "R")).toBe("2:4:E")
}); 

test('rover\' direction is south and it turns right', () => {
  expect(rover(7, 4, "S", "R")).toBe("7:4:E")
}); 

test('rover\'s direction is east, it turns left then move 1 step', () => {
  expect(rover(1, 1, "E", "LM")).toBe("1:2:N")
});

test('rover\'s direction is east, it turns left then move 2 steps', () => {
  expect(rover(1, 1, "E", "LMM")).toBe("1:3:N")
});

test('rover\'s direction is east, it turns left then move 3 steps', () => {
  expect(rover(6, 6, "E", "LMMM")).toBe("6:9:N")
});

test('rover\'s direction is west, it turns left then move 2 steps', () => {
  expect(rover(6, 6, "W", "LMM")).toBe("6:8:N")
});

test('rover\'s direction is west, it turns left then move 6 steps', () => {
  expect(rover(2, 2, "W", "LMMMMMM")).toBe("2:8:N")
});

test('rover\'s direction is west, it turns right then move 5 steps', () => {
  expect(rover(2, 2, "W", "RMMMMM")).toBe("2:-3:S")
});

test('rover\'s direction is north, it turns left then move 3 steps', () => {
  expect(rover(1, 1, "N", "LMMM")).toBe("-2:1:W")
});

test('rover\'s direction is north, it turns left then move 2 steps then turns right', () => {
  expect(rover(3, 3, "N", "LMMR")).toBe("1:3:S")
});

test('rover\'s direction is east, it moves 2 steps, turns right, moves 1 step then left', () => {
  expect(rover(5, 5, "E", "MMRML")).toBe("7:4:W")
});












