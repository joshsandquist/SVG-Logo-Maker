class Shape {
    constructor(color, textColor, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super(color, textColor, text);
      this.radius = radius;
    }
    render() {
      return `<svg width="300" height="200">
        <circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
      </svg>`;
    }
  }