const { Shape, Circle, Square, Triangle } = require('./shapes');

// Test suite for Circle class
describe('Circle', () => {

  // Test case for setting custom color using constructor
  test('should set custom color using constructor', () => {
    const shape = new Circle('green', 'white', 'Hello');
    expect(shape.color).toEqual('green');
  });

  test('should set custom textColor using constructor', () => {
    const shape = new Circle('green', 'white', 'Hello');
    expect(shape.textColor).toEqual('white');
  });
  test('should set custom text using constructor', () => {
    const shape = new Circle('green', 'white', 'Hello');
    expect(shape.text).toEqual('Hello');
  });

  test('should return a proper radius', () => {
    const shape = new Circle('green', 'white', 'Hello');
    expect(shape.radius).toEqual(100);
  });
});

