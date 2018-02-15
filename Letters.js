var wordToGuess = "attom";
var tmpLetter


var Letters = function(letter) {
  this.letter = letter;
  this.letterGuessed = false;
}

Letters.prototype.displayLetter = function() {
      guess.letterValidation()
      tmpLetter = this.letter;
  if (this.letterGuessed) {
    return tmpLetter;
  }
  tmpLetter = "_"
  return tmpLetter;
}

Letters.prototype.letterValidation = function() {
  if (wordToGuess.includes(this.letter)) {
    return this.letterGuessed = true;
  }
  return this.letterGuessed = false;
};

// var guess = new Letters(input);
//
// var tmpLetter = guess.displayLetter()
// var guessed = guess.letterValidation()

// console.log(tmpLetter);
// console.log(guessed);
// var tmpLetter = input.guess.displayLetter()
// var guessed = input.guess.letterValidation()


// console.log("Object Before letter validation: ");
// console.log(guess);
// console.log("-----------------------------");
// console.log(guess.letterValidation());
// console.log("Object After letter validation: ");
// console.log("-----------------------------");
// console.log(guess);
// console.log("-----------------------------");
// console.log("Letter pased to the word array: ");
// console.log(guess.displayLetter());

// module.exports = {
//   Letters: Letters,
//   tmpLetter: tmpLetter,
//   guessed: guessed
// }

module.exports = Letters;
