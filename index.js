var inquirer = require("inquirer");
var Letters = require('./Letters')
var input
var guess


inquirer.prompt([
    {
      type: "input",
      message: "?Guess a letter!",
      name: "letter"
    }

  ])
  .then(function(inquirerResponse) {
  input = inquirerResponse.letter
  input = input.toLowerCase();
  var guess = new Letters(input);
  console.log("log user guess from index: ");
  console.log(guess);
  console.log(guess.letterValidation());

});
