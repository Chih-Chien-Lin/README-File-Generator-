const inquirer = require("inquirer");
const fs = require("fs")
const axios = require("axios");

inquirer
    .prompt([
        // Github username
        {
            type: "input",
            message: "What is your Github user name?",
            name: "username"

        },
        // Project title
        {
            type: "input",
            message: "what's your project title?",
            name: "title"
        },
        // // Description
        {
            type: "input",
            message: "Any description?",
            name: "description"
        },
        // Installation
        {
            type: "input",
            message: "Any specific installation?",
            name: "installation"
        },
        // Usage
        {
            type: "input",
            message: "What's the usage of this file?",
            name: "usage"
        },
        // License
        {
            type: "checkbox",
            message: "What licenses included in this project?",
            name: "license",
            choices: [
                "MIT",
                "Microsoft",
                "JavaScript",
                "HTML"
            ]
        },
        // Contributing
        {
            type: "input",
            message: "Any contributer?",
            name: "contributer"
        }
    ])
    .then(function (response) {
        //using JSON.stringify cuz object cannot read object, so we have to convert it to string to store it!!
        function postIt(takeIn) {
            fs.appendFileSync("ReadmeJustin.md", takeIn, function (err) {
                if (err) throw err;
            })
        }
        // Title section:
        fs.writeFileSync("ReadmeJustin.md", "# " + response.title + "\n\n\n", "utf8", function (err) {
            if (err) throw err;
        })

        // Description sectoin:
        postIt("# Description\n")
        const descriptionElm = response.description + "\n";
        postIt(descriptionElm);

        // Table of contents:
        //
        //

        // Installation section:
        postIt("# Installation\n")
        const installElm = response.installation + "\n";
        postIt(installElm);

        // Usage section:
        postIt("# Usage\n")
        const usageElm = response.usage + "\n";
        postIt(usageElm);

        // License section:
        postIt("# License\n")
        const storeLicense = response.license;
        storeLicense.forEach(licenseName => {
            let licenseElm = "1. " + licenseName + "\n";
            postIt(licenseElm);
        });
        
        // Contributing section:
        postIt("# Contributing\n")
        const contributingElm = response.contributer + "\n";
        
        // Questions section:
        postIt("# Qustions\n")
        const questContent = "If you have anyquestion, please feel free to contatct me through the followings:"
        const contentPost = questContent+"\n"
        postIt(contentPost);

        // get personal photo and repo url:
        const queryUrl = `https://api.github.com/users/${response.username}`;
        console.log(queryUrl);
        axios
        .get(queryUrl)
        .then(function (res) {
            githubURL = res.data.html_url+"\n";
            avatarURL = res.data.avatar_url+"\n";
            postIt(githubURL);
            postAvatar =`<p align="center">
            <img alt="Personal avatar" src="${res.data.avatar_url}"  style = "200*200>
          </p>` 
            postIt(postAvatar);

            });

    });
