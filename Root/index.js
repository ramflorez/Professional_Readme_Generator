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
        name: "badge",
        message: "Select badges for your licenses"
    },
    {
        type: "input",
        name: "description",
        message: "Provide your project's description."
    },
    {
        type: "input",
        name: "installation",
        message: "Explain the installation instructions."
    },
    {
        type: "input",
        name: "objective",
        message: "Describe the objective of your project."
    },
    
    {
        type: "input",
        name: "contributing",
        message: "Provide contact information contributors to your project"
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
        name: "files",
        message: "insert link to your project files"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("ProfREADME.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New ProREADME file created!");
          });
        });

});

function init() {

}

init();
