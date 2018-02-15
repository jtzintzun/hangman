var verifiedLetter = require('./Letters');
var availableWords = [];
var currentWordPosition;

var NewWord = function(newLetter){
  this.newLetter = newLetter;
}

NewWord.prototype.toString = function() {
  var guessedArray = this.newLetter;
  return guessedArray;
}

var guess = new NewWord ("a")
var guess2 = new NewWord ("b")

// var Word = function(word){
//   this.word = word;
// }
//
// function resetWords() {
//   availableWords = [
//     new Word("apple"),
//     new Word("lime"),
//     new Word("grapes")
//   ];
// };
//
// function newWord() {
//   var random = Math.floor(Math.random() * (availableWords.length));
//   console.log("random number:" + random);
//   console.log('availableWords.length:')
//   console.log(availableWords.length);
//   console.log('availableWords: ' );
//   console.log(availableWords);
//   currentWordPosition = random
//   var currentWord = availableWords[random]
//   availableWords.splice(random,1)
//   console.log('availableWords after splice: ');
//   console.log(availableWords);
//   console.log(currentWord);
//   return currentWord
// }
//
// resetWords();
// console.log(availableWords);
// newWord();

//
//
var Person = function(name) {
  this.name = name;
}

Person.prototype.toString = function() {
  var greeting = 'My name is ' + this.name;

  return greeting;
}

var bob = new Person("Bob");

// when concatenating with a string, JavaScript automatically calls `toString`
console.log(bob + '');

var fred = new Person("Fred");
var sally = new Person("Sally");

var personArray = [bob, fred, sally];

// the same thing happens if we call `join` on a Person array:
  // JavaScript calls `toString` automatially on each person, then joins them together
console.log(personArray.join(', '));
