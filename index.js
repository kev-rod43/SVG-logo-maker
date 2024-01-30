const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Circle, Square, Triangle} = require('./lib/shapes.js');

const questions = [
    {
        type: "input",
        name: "characters",
        message: "What characters would you like in your logo? (max:3)",
        validate: (input) => input.length <= 3
    },

    {
        type: "input",
        name: "fontColor",
        message: "What color would you like your font to be? (must be a color keyword or hexadecimal number)",
    },

    {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["triangle", "rectangle", "circle"],
    },

    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be? (must be a color keyword or hexadecimal number)",
    },

];

function init() {}

init();