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



