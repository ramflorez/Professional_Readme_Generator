const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./genmkdwn');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide your project's description."
    },
    {
        type: "input",
        name: "installation",
        message: "Explain the installation of your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage of your project."
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['GNU GPLv3', 'MIT', 'Apache', 'ISC', 'none'],
        message: 'What type of license badge do you want on your project?'
    },

    {
        type: "input",
        name: "contributing",
        message: "Provide contact information of contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please enumerate tests to your project"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "insert link to your project repo files"
    },
];

async function init() {
inquirer
    .prompt(questions)
    .then(async function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

       // axios.get(queryUrl).then(function(res) {
          
        try {
            const res = await axios.get(queryUrl)
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile(__dirname + '/generatedFile/README.md', generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created!");
          })
        }

        catch (err) {
            const githubInfo = {
                githubImage: null,
                email: null,
                name: null
            }
            fs.writeFile(__dirname + '/generatedFile/README.md', generate(data, githubInfo), function(err) {
                if (err) {
                    throw err;
                };
    
                console.log("New README file created!");
        })
    }
})
};


init();

