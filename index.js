const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What would you like to do?",
        name: "Title",
    }
]

function mainPrompts()