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

test('rover turns left from the east', () => {
  expect(rover(0, 0, "E", "L")).toBe("0:1:E")
}); 

test('rover turns left from the east', () => {
  expect(rover(3, 2, "E", "L")).toBe("3:3:E")
}); 

test('rover turns left from the east', () => {
  expect(rover(5, 7, "E", "L")).toBe("5:8:E")
}); 

test('rover turns right from the east', () => {
  expect(rover(0, 0, "E", "R")).toBe("0:-1:E")
}); 

test('rover turns right from the east', () => {
  expect(rover(10, 6, "E", "R")).toBe("10:5:E")
}); 

test('rover turns left from the west', () => {
  expect(rover(4, 4, "W", "L")).toBe("4:5:W")
}); 

test('rover turns left from the west', () => {
  expect(rover(2, 7, "W", "L")).toBe("2:8:W")
}); 

test('rover turns right from the west', () => {
  expect(rover(2, 7, "W", "R")).toBe("2:6:W")
}); 

test('rover turns right from the west', () => {
  expect(rover(10, 1, "W", "R")).toBe("10:0:W")
}); 

test('rover turns left from the north', () => {
  expect(rover(3, 3, "N", "L")).toBe("2:3:N")
}); 

test('rover turns left from the north', () => {
  expect(rover(9, 2, "N", "L")).toBe("8:2:N")
}); 

test('rover turns right from the north', () => {
  expect(rover(9, 2, "N", "R")).toBe("10:2:N")
}); 

test('rover turns right from the north', () => {
  expect(rover(5, 2, "N", "R")).toBe("6:2:N")
}); 

test('rover turns left from the south', () => {
  expect(rover(8, 2, "S", "L")).toBe("7:2:S")
}); 

test('rover turns left from the south', () => {
  expect(rover(2, 4, "S", "L")).toBe("1:4:S")
}); 

test('rover turns right from the south', () => {
  expect(rover(2, 4, "S", "R")).toBe("3:4:S")
}); 

test('rover turns right from the south', () => {
  expect(rover(7, 4, "S", "R")).toBe("8:4:S")
}); 











