var readlineSync = require('readline-sync');

var score = 0;
console.log("Hi");
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName);
var userAsk = readlineSync.question("Do you know Jagdish? ");
console.log("")

if (userAsk === "yes") {
  play("Where does he live? ", "Puri");//function call
  play("Who is his favorite superhero? ", "Thor");//function call
  play("where is he working ", "isit");//function call
}

// play function define
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Right!");
    score++;
  }
  else {
    console.log("Wrong!");
  }
  console.log("Your score is ", score);
  console.log("--------------");
}
