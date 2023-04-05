//Created a parent Shpae class to pass color and text attributes to shape subclasses
class Shape {
    constructor(color, textColor) {
        this.color = color;
        this.textColor = textColor
    }
}
//Shape subclass for a square
class Square extends Shape {
    constructor(color, textColor, side) {
        super(color, textColor)
        this.side = side
    }
}

class Triangle extends Shape {
    constructor(color, textColor, side) {
        super(color, textColor)
        this.side = side
    }
}

class Circle extends Shape {
    constructor(color, textColor, radius) {
        super(color, textColor)
        this.radius = radius
    }
}