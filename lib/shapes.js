//Created a parent Shpae class to pass color and text attributes to shape subclasses
class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor
        this.text = text
    }
    render(element) {
        element.fill(this.color);
        if (this.textColor) {
          element.attr({ 'text-color': this.textColor });
        }
    }
}
//Shape subclass for a square
class Square extends Shape {
    constructor(color, textColor, text, side) {
        super(color, textColor, text)
        this.side = side
    }
}
//Shape subclass for a triangle
class Triangle extends Shape {
    constructor(color, textColor, text, side) {
        super(color, textColor, text)
        this.side = side
    }
}
//Shape subclass for a circle
class Circle extends Shape {
    constructor(color, textColor, text, radius) {
        super(color, textColor, text)
        this.radius = radius
    }
}