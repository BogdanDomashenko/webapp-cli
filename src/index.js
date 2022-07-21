#! /usr/bin/env node
const inquirer = require('inquirer');
const chalk = require("chalk");
const path = require("path");
const QUESTIONS = require("./utils/constants/questions");
const ProjectService = require("./services/Project.service");

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS)
.then(answers => {
    const projectChoice = answers['template'];
    const projectName = answers['name'];
    const templatePath = path.join(__dirname, 'templates', projectChoice);
    const tartgetPath = path.join(CURR_DIR, projectName);

    if (!ProjectService.create(tartgetPath)) {
        return;
    }

    ProjectService.createContents(templatePath, projectName);
});