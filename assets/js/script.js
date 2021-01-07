var timeEl = document.getElementById("time");
var mainEl = document.querySelector(".wrapper");
var startQuiz = document.getElementById("begin");
var qestionDisplay = document.getElementById("content");



//click on Start Quiz button
startQuiz.addEventListener("click", function () {
  mainEl.textContent = "";
  quizTimer();
  quizEvent();
})

//start timer for quiz
function quizTimer(e) {
  // e.preventDefault();
  var timeLeft = 10;
  var timeInterval = setInterval(function () {
    timeEl.textContent = "Your Timer: " + timeLeft + " seconds";
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timeEl.textContent = "You are out of time!";
      // finalScore(); //initiate a function to show results and enter initials to record score.
    }
  }, 1000);
}


function quizEvent() {
  // questionDisplay.setAttribute("style", "visibility: visible;");//NOT WORKING
  // questionDisplay.setAttribute("style", "visibility: visible");
document.getElementById("content").style.visibility = "visible";
}


// var firstQ = document.createElement("h2"); //need to create the buttons through JS and connect the content of the Q in container and A in boxes.
// var makeString = JSON.stringify(questions[qOne]);
// console.log(makeString);
// firstQ.textContent = makeString;
// document.body.appendChild(firstQ);
// console.log(firstQ);
// questionDisplay.children[0].textContent = questions.qOne;
// questionDisplay.children[1].children[0].textContent = "test";


// i=0

// function quizEvent() {
//   questionDisplay.textContent = questions[i];
//   console.log(questions[i]);
// };



function finalScore() {

}

//for loop questions with if for correct and wrong answer with further if for wrong to subtract time.
