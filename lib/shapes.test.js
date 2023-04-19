const {Circle, Square, Triangle } = require('./shapes');

// Tests for Circle class
describe('Circle', () => {
// Tests setting the textColor
  test('should set custom textColor using constructor', () => {
    const shape = new Circle('white', 'Hello');
    expect(shape.textColor).toEqual('white');
  });
  // Tests setting the proper text content
  test('should set custom text using constructor', () => {
    const shape = new Circle('white', 'Hello');
    expect(shape.text).toEqual('Hello');
  });
  // Tests Setting a proper radius
  test('should return a proper radius', () => {
    const shape = new Circle('white', 'Hello');
    expect(shape.radius).toEqual(100);
  });
// Had to make sure the test SVG would match up perfectly in spacing to an actual generated file
  test('renders a blue circle', () => {
    const circle = new Circle('white', 'Circle');
    circle.setColor('blue');
    const output = circle.render();
    console.log(output); // add this line
    expect(output).toEqual('<svg width="300" height="200">\n        <circle cx="50%" cy="50%" r="100" fill="blue" />\n        <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="50" dy=".3em">Circle</text>\n      </svg>');
  });
})

// Same tests used for square, but with side length instead of radius
describe('Square', () => {

  // Test case for setting custom color using constructor
  test('should set custom textColor using constructor', () => {
    const shape = new Square('white', 'Hello');
    expect(shape.textColor).toEqual('white');
  });
  
  test('should set custom text using constructor', () => {
    const shape = new Square('white', 'Hello');
    expect(shape.text).toEqual('Hello');
  });

  test('should return a proper side length', () => {
    const shape = new Square('white', 'Hello');
    expect(shape.side).toEqual(200);
  });

  test('renders a purple square', () => {
    const square = new Square('white', 'Square');
    square.setColor('purple');
    const output = square.render();
    console.log(output); // add this line
    expect(output).toEqual('<svg width="300" height="200">\n          <rect x="50" y="0" width="200" height="200" fill="purple" />\n          <text x="150 " y="110" text-anchor="middle" fill="white" font-size="50">Square</text>\n        </svg>');
  });
});

// Tests for Triangle class
describe('Triangle', () => {

  // Test case for setting custom color using constructor
  test('should set custom textColor using constructor', () => {
    const shape = new Triangle('white', 'Hello');
    expect(shape.textColor).toEqual('white');
  });
  
  test('should set custom text using constructor', () => {
    const shape = new Triangle('white', 'Hello');
    expect(shape.text).toEqual('Hello');
  });

  test('renders a blue triangle', () => {
    const triangle = new Triangle('white', 'Triangle');
    triangle.setColor('blue');
    const output = triangle.render();
    console.log(output); // add this line
    expect(output).toEqual('<svg width="300" height="200">\n    <polygon points="150,10 290,250 10,250" fill="blue" />\n    <text x="50%" y="75%" text-anchor="middle" fill="white" font-size="50">Triangle</text>\n  </svg>');
  });
});