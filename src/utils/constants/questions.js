const fs = require("fs");
const path = require("path");

const CHOICES = fs.readdirSync(path.join(__dirname, '../../templates'))
    .filter(choise => choise[0] !== "_");
// if folder name starts from '_' sumbol it mens that template isn't available

const QUESTIONS = [
{
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
},
{
    name: 'name',
    type: 'input',
    message: 'Project name:',
}];

module.exports = QUESTIONS;