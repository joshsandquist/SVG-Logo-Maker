class Shape {
    constructor(color, textColor, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
    }
  }

  class Circle extends Shape {
    constructor(color, textColor, text) {
      super(color, textColor, text);
      this.radius = 100;
    }
    render() {
      return `<svg width="300" height="200">
        <circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="50" dy=".3em">${this.text}</text>
      </svg>`;
    }
  }

  class Square extends Shape {
    constructor(color, textColor, text){
    super(color, textColor, text);
    this.side = 200
    }
    render() {
        return `<svg width="300" height="200">
          <rect x="0" y="0" width="${this.side}" height="${this.side}" fill="${this.color}" />
          <text x="${this.side / 2}" y="${this.side / 2}" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
        </svg>
      `;
    }
  }
  module.exports = {Shape, Circle, Square}