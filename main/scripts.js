const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions about this project, please reach out to [${answers.username}](https://github.com/${answers.username}) at ${answers.email}.
`;
}

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Choose a license:',
            default: 'MIT'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ]);
}

async function main() {
    try {
        const answers = await promptUser();
        const readmeContent = generateREADME(answers);

        const examplesDir = path.join(__dirname, 'examples');
        if (!fs.existsSync(examplesDir)) {
            fs.mkdirSync(examplesDir);
        }

        const readmePath = path.join(examplesDir, 'README.md');
        fs.writeFileSync(readmePath, readmeContent);
        console.log('README.md file generated successfully in the examples folder!');
    } catch (error) {
        console.error('Error generating README.md:', error);
    }
}

main();
