var timeEl = document.getElementById("time");
var mainEl = document.querySelector(".wrapper");
var startQuiz = document.getElementById("begin");
var qestionDisplay = document.getElementById("Content");

// var buttonOne = document.createElement("bOne");
// var buttonTwo = document.createElement("bTwo");
// var buttonThree = document.createElement("bThree");
// var buttonFour = document.createElement("bFour");
// var buttonFive = document.createElement("bFive");

//Q&A array
var questions = [
  qOne = "What color is the sky?",
  qTwo = "What color is the laptop?",
  qThree = "What color is the ceiling?",
  qFour = "What color is the screen background?",
  qFive = "What color is the banana?"
]

var answers = [
  aOne = "blue", "grey", "white", "black", "yellow",
  aTwo = "blue", "grey", "white", "black", "yellow",
  aThree = "blue", "grey", "white", "black", "yellow",
  aFour = "blue", "grey", "white", "black", "yellow",
  aFive = "blue", "grey", "white", "black", "yellow"
]

var firstQ = document.createElement("h2"); //need to create the buttons through JS and connect the content of the Q in container and A in boxes.
var makeString = JSON.stringify(questions[qOne]);
console.log(makeString);
firstQ.textContent = makeString;
document.body.appendChild(firstQ);
console.log(firstQ);
// questionDisplay.children[0].textContent = questions.qOne;
// questionDisplay.children[1].children[0].textContent = "test";


//click on Start Quiz button
startQuiz.addEventListener("click", function () {
  mainEl.textContent = "";
  // quizTimer();
  // quizEvent();
})

//start timer for quiz
function quizTimer() {
  var timeLeft = 10;
  var timeInterval = setInterval(function () {
    timeEl.textContent = "Your Timer: " + timeLeft + " seconds";
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timeEl.textContent = "You are out of time!";
      // finalScore(); //initiate a function to show results and enter initials to record score.
    }
  }, 500);
}

// i=0

// function quizEvent() {
//   questionDisplay.textContent = questions[i];
//   console.log(questions[i]);
// };



function finalScore() {

}

//for loop questions with if for correct and wrong answer with further if for wrong to subtract time.
