var timeEl = document.getElementById("time");
var mainEl = document.querySelector(".wrapper");
var startQuiz = document.getElementById("begin");
var questionDisplay = document.getElementById("content");
var scoreEl = document.getElementById("scoreDisplay");
var userEl = document.getElementById("score");

var qEl = document.getElementById("question");
var ansA = document.getElementById("answerA");
var ansB = document.getElementById("answerB");
var ansC = document.getElementById("answerC");
var ansD = document.getElementById("answerD");
var ansE = document.getElementById("answerE");
var resultEl = document.getElementById("questionOutcome");

var i=0;
var points = 0;
var totalScore = 0;

var optOne; //button 1
var optTwo; //button 2
var optThree; //button 3
var optFour; //button 4
var optFive; //button 5
var docTime;
var timeInterval;

//Q&A array
var qArr = [
  {
    q: "What color is the sky?",
    opt: ["blue-q1", "grey-q1", "white-q1", "black-q1", "yellow-q1"],
    ans: "blue-q1"
  },
  {
    q: "What color is the laptop?",
    opt: ["blue-q2", "grey-q2", "white-q2", "black-q2", "yellow-q2"],
    ans: "grey-q2"
  },
  {
    q: "What color is the ceiling?",
    opt: ["blue-q3", "grey-q3", "white-q3", "black-q3", "yellow-q3"],
    ans: "white-q3"
  },
  {
    q: "What color is the screen background?",
    opt: ["blue-q4", "grey-q4", "white-q4", "black-q4", "yellow-q4"],
    ans: "black-q4"
  },
  {
    q: "What color is the banana?",
    opt: ["blue-q5", "grey-q5", "white-q5", "black-q5", "yellow-q5"],
    ans: "yellow-q5"
  },
];


//click on Start Quiz button
startQuiz.addEventListener("click", function () {
  mainEl.textContent = "";
  quizTimer();
  quizEvent();
});

var docTime=0;

//start timer for quiz
function quizTimer() {
  // e.preventDefault();  THIS IS NOT WORKING
  var timeLeft = 60;
  timeInterval = setInterval(function () {
    timeLeft = timeLeft-docTime;
    timeEl.textContent = "Your Timer: " + timeLeft + " seconds";
    docTime=0
    timeLeft--;
    // console.log(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      timeEl.textContent = "You are out of time!";
      finalScore(); //initiate a function to show results and enter initials to record score.
    }
  }, 1000);
};

function quizEvent() {
  questionDisplay.style.display = "block"; //brings up the Q
  console.log(i)
  if(i<qArr.length){
    var test = qArr[i].q;//loops through all Q in arr
    optOne = qArr[i].opt[0]; //button 1
    optTwo = qArr[i].opt[1]; //button 2
    optThree = qArr[i].opt[2]; //button 3
    optFour = qArr[i].opt[3]; //button 4
    optFive = qArr[i].opt[4]; //button 5

    qEl.textContent = test; //connects Q and options to html
    ansA.textContent = optOne;
    ansB.textContent = optTwo;
    ansC.textContent = optThree;
    ansD.textContent = optFour;
    ansE.textContent = optFive;
  }
  else {
    questionDisplay.style.display = "none"; //hides the Q
    clearInterval(timeInterval);
    finalScore();
    timeEl.textContent = "";
  }
}
    ansA.addEventListener("click", function () { //select option A//should be on the global scope
      var correctAns = qArr[i].ans; //ID of correct answer for each Q
      if (optOne === correctAns) { //condition has to be met if correct answer is chosen
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!";//correct answer is chosen. Display message "Correct". 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5//incorrect answer is chosen. deduct 5 sec from timeLeft.NEED HELP HERE.
      }
      i++
      quizEvent();
    });

    ansB.addEventListener("click", function () {//select option B
      var correctAns = qArr[i].ans;
      if (optTwo === correctAns) { //condition has to be met if correct answer is chosen
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; //correct answer is chosen. Display message "Correct". 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5//incorrect answer is chosen. deduct 5 sec from timeLeft.NEED HELP HERE.      }
      }
      i++
      quizEvent();
      });

    ansC.addEventListener("click", function () {//select option C
      var correctAns = qArr[i].ans;
      if (optThree === correctAns) { //condition has to be met if correct answer is chosen
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; //correct answer is chosen. Display message "Correct". 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5//incorrect answer is chosen. deduct 5 sec from timeLeft.NEED HELP HERE.      }
    }
    i++
    quizEvent();
  });

    ansD.addEventListener("click", function () {//select option D
      var correctAns = qArr[i].ans;
      if (optFour === correctAns) { //condition has to be met if correct answer is chosen
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; //correct answer is chosen. Display message "Correct". 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5//incorrect answer is chosen. deduct 5 sec from timeLeft.NEED HELP HERE.      }
    }
    i++
    quizEvent();
  });

    ansE.addEventListener("click", function () {//select option E
      var correctAns = qArr[i].ans;
      // console.log("Answer is " + qArr[i].ans);
      if (optFive == correctAns) { //condition has to be met if correct answer is chosen
        // console.log(ansE);
        // console.log(correctAns);
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; //correct answer is chosen. Display message "Correct". 
        totalScore +=20;
      }
      else {
        console.log("selected" + optFive);
        console.log(correctAns);
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5//incorrect answer is chosen. deduct 5 sec from timeLeft.NEED HELP HERE.      }
    }
    i++
    quizEvent();
  });

  function finalScore() {
    resultEl.textContent = "";
    questionDisplay.textContent = "";
    scoreEl.style.display = "block";//brings up the final score
    userEl.style.display = "block";
    scoreEl.textContent = "Your Score: " + totalScore + "%";

  }

