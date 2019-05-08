var correctGuess = false;
var randNum = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if(parseInt(guess) === randNum) {
  correctGuess = true;
} else if (parseInt(guess) < randNum) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess + '.');
  if (parseInt(guessMore) === randNum) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randNum) {
  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess + '.');
  if (parseInt(guessLess) === randNum) {
    correctGuess = true;
  }
}
if(correctGuess) {
  document.write("<p>You guessed it right!</p>");
} else {
  document.write("<p>Sorry. The number is " + randNum + ".</p>");
}
