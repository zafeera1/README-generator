const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content based on user input
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

// Function to prompt user for input
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
            default: 'MIT' // Default license
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

// Main function to run the script
async function main() {
    try {
        const answers = await promptUser(); // Prompt user for input
        const readmeContent = generateREADME(answers); // Generate README content
        fs.writeFileSync('README.md', readmeContent); // Write content to README.md file
        console.log('README.md file generated successfully!');
    } catch (error) {
        console.error('Error generating README.md:', error);
    }
}

// Run the main function
main();
