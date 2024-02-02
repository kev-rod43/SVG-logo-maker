const inquirer = require('inquirer');

const fs = require('fs');

const { Shapes, Circle, Square, Triangle } = require('./lib/shapes.js');

const questions = [
    {
        type: "input",
        name: "text",
        message: "What characters would you like in your logo? (max:3)",
        validate: (input) => input.length <= 3,
        filter: (input) => input.toUpperCase()
    },

    {
        type: "input",
        name: "textColor",
        message: "What color would you like your font to be? (must be a color keyword or hexadecimal number)",
    },

    {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["Triangle", "Square", "Circle"],
    },

    {
        type: "input",
        name: "color",
        message: "What color would you like your shape to be? (must be a color keyword or hexadecimal number)",
    },

];

function init() { }
inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        let userShape;

        //creates a new instance of the picked shape, then generates the svg file
        switch (answers.shape) {
            case 'Circle':
                userShape = new Circle(answers.text, answers.textColor, answers.color);
                userShape.generateSVG('./examples/generatedSVG.svg');
                break;
            case 'Square':
                userShape = new Square(answers.text, answers.textColor, answers.color);
                userShape.generateSVG('./examples/generatedSVG.svg');
                break;

            case 'Triangle':
                userShape = new Triangle(answers.text, answers.textColor, answers.color);
                userShape.generateSVG('./examples/generatedSVG.svg');
                break;
        }
    })

init();