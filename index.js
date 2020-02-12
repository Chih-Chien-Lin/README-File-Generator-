var inquirer = require("inquirer");
var fs = require("fs")

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
        name: "titile"
    },
    // Description
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // table of content
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // Installation
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // Usage
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // License
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // Contributing
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // Tests
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    // Questions
    {
        type: "input",
        message: "Any description?",
        name: "description"
    },
    //User Github Profile picture
    //User Githug email
  ])
  .then(function(response) {
      //using JSON.stringify cuz object cannot read object, so we have to convert it to string to store it!!
    fs.writeFile("userInput.txt",JSON.stringify(response),function(err){

    });
  });
