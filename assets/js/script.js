var timeEl = document.getElementById("time");
var mainEl = document.querySelector(".wrapper");
var startQuiz = document.getElementById("begin");
var questionDisplay = document.getElementById("content");
var scoreEl = document.getElementById("scoreDisplay");
var userEl = document.getElementById("score");
var resultEl = document.getElementById("questionOutcome");
var userInitials = document.getElementById("initials");
var userSubmit = document.getElementById("submit");
var quizReset = document.getElementById("clear"); //btn on highScores.html
var redoQuiz = document.getElementById("home"); //btn on highScores.html

var qEl = document.getElementById("question");
var ansA = document.getElementById("answerA");
var ansB = document.getElementById("answerB");
var ansC = document.getElementById("answerC");
var ansD = document.getElementById("answerD");
var ansE = document.getElementById("answerE");

var i = 0;
var points = 0;
var totalScore = 0;
var score = 0;

var optOne;
var optTwo; 
var optThree; 
var optFour; 
var optFive; 
var docTime;
var timeInterval;

//Q&A Array
var qArr = [
  {
    q: "Where are Jared Padalecki and Jensen Ackles from?",
    opt: ["Texas", "Canada", "Washington", "Alaska", "Colorado"],
    ans: "Texas"
  },
  {
    q: "When did Jared Padalecki meet his wife- Genevieve Cortese?",
    opt: ["2000", "2005", "2009", "2011", "2017"],
    ans: "2009"
  },
  {
    q: "Supernatural is filmed at one of the most popular filming locations in the world. Where is it?",
    opt: ["Denver, Colorado", "Hollywood, California", "Seattle, Washington", "Minot, North Dakota", "Vancouver, British Columbia"],
    ans: "Vancouver, British Columbia"
  },
  {
    q: "When was Supernatural originally set to end?",
    opt: ["2007", "2008", "2009", "2010", "2011"],
    ans: "2010"
  },
  {
    q: "How long did Kripke work on the script before it made it onto the small screen?",
    opt: ["10 years", "5 years", "2 years", "1 year", "6 months"],
    ans: "10 years"
  },
];

//click on Start Quiz button
startQuiz.addEventListener("click", function () {
  mainEl.textContent = "";
  quizTimer();
  quizEvent();
});

var docTime=0;

//Start timer for quiz
function quizTimer() {
  var timeLeft = 60;
  timeInterval = setInterval(function () {
    timeLeft = timeLeft-docTime;
    timeEl.textContent = "Your Timer: " + timeLeft + " seconds";
    docTime=0
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      timeEl.textContent = "You are out of time!";
      finalScore(); 
    }
  }, 1000);
};

function quizEvent() {
  questionDisplay.style.display = "block"; 
  if(i<qArr.length){
    var test = qArr[i].q;
    optOne = qArr[i].opt[0];
    optTwo = qArr[i].opt[1]; 
    optThree = qArr[i].opt[2]; 
    optFour = qArr[i].opt[3]; 
    optFive = qArr[i].opt[4]; 

    qEl.textContent = test; 
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
    ansA.addEventListener("click", function () { 
      var correctAns = qArr[i].ans;
      if (optOne === correctAns) { 
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5;
      }
      i++
      quizEvent();
    });

    ansB.addEventListener("click", function () {
      var correctAns = qArr[i].ans;
      if (optTwo === correctAns) { 
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5
      }
      i++
      quizEvent();
      });

    ansC.addEventListener("click", function () {
      var correctAns = qArr[i].ans;
      if (optThree === correctAns) { 
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5;
    }
    i++
    quizEvent();
  });

    ansD.addEventListener("click", function () {
      var correctAns = qArr[i].ans;
      if (optFour === correctAns) { 
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!"; 
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5;
    }
    i++
    quizEvent();
  });

    ansE.addEventListener("click", function () {
      var correctAns = qArr[i].ans;
      if (optFive == correctAns) { 
        resultEl.style.display = "block";
        resultEl.textContent = "Correct!";
        totalScore +=20;
      }
      else {
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong answer";
        docTime = 5;
    }
    i++
    quizEvent();
  });

  function finalScore() {
    resultEl.textContent = "";
    questionDisplay.textContent = "";
    scoreEl.style.display = "block";
    userEl.style.display = "block";
    scoreEl.textContent = "Your Score: " + totalScore + "%";
  }

//High Scores Display
userSubmit.addEventListener("click", function () {
  displayHighScores();  
});
var highScores = JSON.parse(localStorage.getItem(highScores)) || [];
var score = 0;

function displayHighScores() {
    highScores.forEach(function() {
    var div = document.createElement("div");
    div.innerHTML = score.userInitials + " : " + score.scoreDisplay;
    content.appendChild(div);
    getInitials();
  });
}

function getInitials() {
    displayHighScores();
    const initials = userInitials;
    highScores.push({
    initials : initials,
    score : score
  })
  localStorage.setItem("highScores", JSON.stringify(highScores));
  displayHighScores();
};

//Reset button


//Return to Quiz button
redoQuiz.addEventListener("click", function () {
redoQuiz.setAttribute("href", "./index.html");
});