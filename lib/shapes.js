const fs = require('fs');

//Shapes class with utility methods for rendering/generating
//Each child of shapes inherits from shape, and has its own renderShape func
class Shapes {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    };

    renderText() {
        return `<text x="150" y="117" fill="${this.textColor}" style="font-size:46px;text-anchor:middle">${this.text}</text>`
    };

    renderSVG() {
        return `<svg height="200" width="300">
    <g>
    ${this.renderShape()}
    ${this.renderText()}
    </g>
  </svg>`};

    generateSVG(fileName) {
        fs.writeFile(fileName, this.renderSVG(), (err) => { err ? console.error(err) : console.log("It did the thing"); }
        )
    };
};

class Circle extends Shapes {

    constructor(text, textColor, color) {
        super(text, textColor, color)
    };

    renderShape() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    };
};

class Square extends Shapes {

    constructor(text, textColor, color) {
        super(text, textColor, color)
    };

    renderShape() {
        return `<rect width="200" height="200" x="50" y="0" fill="${this.color}" />`;
    };
};

class Triangle extends Shapes {

    constructor(text, textColor, color) {
        super(text, textColor, color)
    };

    renderShape() {
        return `<polygon points="150,0 20,200 280,200" fill="${this.color}" />`;
    };
};

module.exports = { Shapes, Circle, Square, Triangle };