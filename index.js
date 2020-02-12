var inquirer = require("inquirer");
var fs = require("fs")

inquirer
    .prompt([
        // Github username
        {
            type: "input",
            message: "What is your Github user name?",
            name: "username"

        }
        // Project title
        // {
        //     type: "input",
        //     message: "what's your project title?",
        //     name: "titile"
        // },
        // // Description
        // {
        //     type: "input",
        //     message: "Any description?",
        //     name: "description"
        // },
        // // // table of content
        // // {
        // //     type: "input",
        // //     message: "Any description?",
        // //     name: "description"
        // // },
        // // Installation
        // {
        //     type: "input",
        //     message: "Any specific installation?",
        //     name: "installation"
        // },
        // // Usage
        // {
        //     type: "input",
        //     message: "What's the usage of this file?",
        //     name: "usage"
        // },
        // // License
        // {
        //     type: "input",
        //     message: "Any License?",
        //     name: "license"
        // },
        // // Contributing
        // {
        //     type: "input",
        //     message: "Any contributer?",
        //     name: "contributer"
        // },
        // // Tests
        // {
        //     type: "input",
        //     message: "test",
        //     name: "test"
        // },
        // // Questions
        // {
        //     type: "input",
        //     message: "Any question?",
        //     name: "question"
        // },
        //User Github Profile picture
        //User Githug email
    ])
    .then(function (response) {
        //using JSON.stringify cuz object cannot read object, so we have to convert it to string to store it!!
        // fs.writeFile("userInput.txt",response[1].username,function(err){
        const userName = 'My name is ${arya.first}!';
        console.log(response);
    });
//   });
