#! /usr/bin/env node
const cliSelect = require('cli-select');
const chalk = require('chalk');
 
cliSelect({
    values: ['Major', 'Minor', 'Patch'],
    valueRenderer: (value, selected) => {
        if (selected) {
            return chalk.underline(value);
        }
 
        return value;
    },
}).then((value) => {
  console.log(value);
});