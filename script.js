var randNum = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if(parseInt(guess) === randNum) {
  document.write("<p>You guessed it right!</p>");
} else {
  document.write("<p>Sorry. The number is " + randNum + ".</p>");
}
