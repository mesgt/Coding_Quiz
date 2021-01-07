var timeEl = document.getElementById("time");
var mainEl = document.querySelector(".wrapper");
var startQuiz = document.getElementById("begin");

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

//click on Start Quiz button
startQuiz.addEventListener("click", function() {
    mainEl.textContent= "";
    quizTimer();
})

//start timer for quiz
function quizTimer() {
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
      timeEl.textContent = "Your Timer: " + timeLeft + " seconds";
      timeLeft--;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timeEl.textContent = "You are out of time!";
        finalScore(); //initiate a function to show results and enter initials to record score.
      }
    }, 500);
  }

function finalScore() {

}

//for loop questions with if for correct and wrong answer with further if for wrong to subtract time.
