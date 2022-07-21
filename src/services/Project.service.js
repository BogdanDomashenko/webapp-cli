const fs = require("fs");
const path = require("path");

const ProjectService = {
  create(path) {
    if (fs.existsSync(path)) {
      console.log(chalk.red(`Folder ${path} already exists. Remove or use another name.`));
      return false;
    }
    fs.mkdirSync(path);
    
    return true;
  },
  createContents(templatePath, projectName) {
    const CURR_DIR = process.cwd();
    const SKIP_FILES = ['node_modules', '.template.json'];

    const filesToCreate = fs.readdirSync(templatePath);

    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        const stats = fs.statSync(origFilePath);
        if (SKIP_FILES.indexOf(file) > -1) return;
        
        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');
            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            this.createContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}
}

module.exports = ProjectService;