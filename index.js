const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser = readmeData => {
    return inquirer
    .prompt([
        {  
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects title');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDesc',
            message: 'Would you like your README to include a project description?',
            default: false
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description for your project.',
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                }
                return false;
            } ,
            when: function(confirm) {
                return confirm.confirmDesc;
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like your README to include installation instructions for future users?',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions.',
            validate: installInput => {
                if(installInput){
                    return true;
                } return false;
            },
            when: function(confirm) {
                return confirm.confirmInstall;
            }
        },
        {
            type: 'confirm',
            name: 'confirmUInformation',
            message: 'Would you like to add usage information about your project for future users?',
            default: false
        },
        {
            type: 'input',
            name: 'uInstructions',
            message: 'Add usage information',
            validate: uInstructionsInput => {
                if(uInstructionsInput) {
                    return true;
                } return false;
            },
            when: function(confirm) {
                return confirm.confirmUInformation;
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to include contribution guidelines for your project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Add contribution guidelines',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } return false;
            },
            when: function(confirm){
                return confirm.confirmContribution;
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose which license your project has?',
            choices: ['MIT', 'Apache 2.0', 'ISC'],
            validate: licenseInput => {
                if(licenseInput){
                    return true;
                } else{
                    return console.log("you must choose a license for your project")
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmTInstructions',
            message: 'Would you like to include testing instructions for future users?',
            default: false
        },
        {
            type: 'input',
            name: 'tInstructions',
            message: 'detail how others can test your application.',
            validate: tInstructionsInput => {
                if(tInstructionsInput){
                    return true;
                } return false;
            },
            when: function(confirm){
                return confirm.confirmTInstructions;
            }
        },
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Would you like to add a section with your contact information to allow future users to reach out to you with questions?',
            default: false
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } return false;
            },
            when: function(confirm){
                return confirm.confirmQuestions;
            }
        },
        {
            type: 'input',
            name: 'questionsInstructions',
            message: 'Explain how users should contact you if they have questions (ex: via the email provided)',
            validate: qInstructionsInput => {
                if(qInstructionsInput){
                    return true;
                } return false;
            },
            when: function(confirm){
                return confirm.confirmQuestions;
            }
        },
        {
            type: 'input',
            name: 'questionsGithub',
            message: 'Please enter the link for your GitHub profile',
            validate: githubInput => {
                if(githubInput){
                    return true;
                } return false;
            },
            when: function(confirm){
                return confirm.confirmQuestions
            }
        },
        {
            type: 'checkbox',
            name:'confirmContents',
            message: 'Check the box to generate your README.md file',
            choices: ['generate my file!']
        },
    ]);
};

promptUser()
.then(readmeData => {
    const pageReadme = generatePage(readmeData);


fs.writeFile('README.md', pageReadme, err =>{
    if (err) throw new Error(err);
    console.log("README was created!");
});
});