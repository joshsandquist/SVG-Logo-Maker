// requiring npm packages
const inquirer = require('inquirer')
const fs = require('fs')

const shapes = ['Circle', 'Triangle', 'Square'];
const colors = ['black' ,'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'pink']
// User choices for creating logo
const init = () => {inquirer.prompt([
//Question to pick a logo shape
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape for your logo:',
    choices: shapes,
  },
  // Question to enter a color. Uses the colors array and the indexOf function to validate user input against the array
  {
    type: 'input',
    name: 'color',
    message: 'Please enter a color for your shape',
    validate: function(value) {
        if (colors.indexOf(value) === -1) {
            return 'Invalid color';
        } else {
            return true;
        }
    }
},
// Question for logo text, will throw an error if length is 0 or > 3.
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: function(value) {
      if (value.length > 3) {
        return 'Please enter up to three characters.';
      } else if (value.length === 0) {
        return 'Please enter at least one character.';
      } else {
        return true;
      }
    }
  },
  {
//Same function used to filter colors as in shape color question
    type: 'input',
    name: 'textColor',
    message: 'Please enter a text color for your logo',
    validate: function(value) {
        if (colors.indexOf(value) === -1) {
            return 'Invalid color';
        } else {
            return true;
        }
    }
},
]);
}

init()