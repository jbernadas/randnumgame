/*
This Random Number Guessing Game generates a number between 1 and 6 and gives a player two attempts to guess the computer's random number.
*/

var correctGuess = false; 
var randNum = Math.floor(Math.random() * 6) + 1;

// prompts the user to type in a guess
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");

// if input is correct set correctGuess to true and disregard the preceding else ifs, goes to next if statement
if(parseInt(guess) === randNum) {
  correctGuess = true;
} 
// if the user's first guess is too low, prompt him/her for a second time
else if (parseInt(guess) < randNum) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess + '.');
  // if the user guesses correctly set correctGuess to true
  if (parseInt(guessMore) === randNum) {
    correctGuess = true;
  }
} 

// if the user's first guess is too high, prompt him/her for a second time
else if (parseInt(guess) > randNum) {
  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess + '.');
  // if the user guesses correctly set correctGuess to true
  if (parseInt(guessLess) === randNum) {
    correctGuess = true;
  }
}
// tell the user he/she guessed correctly
if(correctGuess) {
  document.write("<p>You guessed it right!</p>");
}
// wrong guess 
else {
  document.write("<p>Sorry. The number is " + randNum + ".</p>");
}
