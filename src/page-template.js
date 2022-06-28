//create the function to generate the README file
const generatePage = readmeData => {
    let descText;
    let installText;
    let uInstructionsText;
    let contributionText;
    let licenseText;
    let tText;
    let questionText;
    let tocArray;
    let tocText = '';

    if(!readmeData.confirmDesc){
        descText = ''
    } else {
        descText = `## Description \n${readmeData.description}`;
    };

    if(readmeData.confirmContents){
        tocArray = [`\n* [License](#license)`]
    };

    if(readmeData.confirmInstall){
        installText = `## Installation Instructions \n${readmeData.installation}`;
        tocArray.unshift(`\n* [Install Instructions](#installation-instructions)`);
    } else {
        installText =  ''
    };

    if(readmeData.confirmUInformation) {
        uInstructionsText = `## Usage Instructions \n${readmeData.uInstructions}`;
        tocArray.unshift(`\n* [Usage Instructions](#usage-instructions)`);
    } else {
        uInstructionsText = ''
    }

    if(readmeData.confirmContribution){
        contributionText = `## Contribution Instructions \n${readmeData.contribution}`;
        tocArray.unshift(`\n* [Contribution Guidelines](#contribution-instructions)`);
    } else {
        contributionText = ''
    }

    if(readmeData.license === 'MIT'){
        licenseText = `## License \n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (readmeData.license === 'Apache 2.0') {
        licenseText = `## License \n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (readmeData.license === 'ISC'){
        licenseText = `## License \n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }

    if(readmeData.confirmTInstructions){
        tText = `## Test Instructions \n${readmeData.tInstructions}`;
        tocArray.unshift(`\n* [Test Instructions](#test-instructions)`);
    } else {
        tText = ''
    }

    if(readmeData.confirmQuestions) {
        questionText = `## Contact Information \n* ${readmeData.questionsEmail}\n* ${readmeData.questionsInstructions}\n* [GitHub Profile](${readmeData.questionsGithub})`;
    } else {
        questionText = ''
    }

    if(tocArray){
        tocArray = tocArray.join('');
        tocText = `## Table of Contents \n${tocArray}`;

    }

//this returns what will be printed from the template onto the README.md file
return`
# ${readmeData.title}

${descText}

${tocText}

${licenseText}

${installText}

${uInstructionsText}

${contributionText}

${tText}

${questionText}

`;
};


//allows the generatePage template to be exported into the index.js file
module.exports = generatePage;
