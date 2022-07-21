// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//load image
let img = document.createElement("img");
img.src = "../assets/images/bg.jpg";
let div = document.getElementById("imgbg");
div.appendChild(img);
img.id = "imgbg";

//create some variables

const lastQuestion = questions.length - 1;
let questionCounter = 0;
let score = 0;

// build a question
function buildQuestion() {
  // the question + choice options with the index of the question counter - current question
  let q = questions[questionCounter];

  // separate each question and option and make it the appropriate part of the dom
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

//start the quiz when the start text is clicked on

start.addEventListener("click", startQuiz);
// start quiz

function startQuiz() {
  // change the start text to none which will hide it

  start.style.display = "none";
  instructions.style.display = "none";
  img.style.display = "none";

  // buildQuestion- pull out the question and options of the current question and populate the correct part of the dom
  buildQuestion();
  quiz.style.display = "block";
  renderProgress();
}

// render progress
function renderProgress() {
  // create a var called qIndex to log how many questions have been answered, using a for loop for each question create a div called prog with an id of the qindex that can be styled correct or wrong
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
  // this is done only while the  question counter is less than or equal to the total number of questions
  if (questionCounter <= questions.length) {
    // questionCounter++;
    buildQuestion();
  } else {
    // end the quiz and show the score

    scoreRender();
  }
}


// checkAnswer
function checkAnswer(answer) {
  if (questions[questionCounter].correct == answer) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }

  if (questionCounter < lastQuestion) {
    questionCounter++;

    buildQuestion();
  } else {
    // end the quiz and show the score
   
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(questionCounter).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(questionCounter).style.backgroundColor = "red";
}

// score render
function scoreRender() {
  // calculate the amount of question percent answered by the user
  let scorePerCent = Math.round((100 * score) / questions.length);
  scoreDiv.innerHTML += "<p> Your score is " + scorePerCent + "%</p>";

  quiz.style.display = "none";
  scoreDiv.style.display = "block";
  resetbtn.style.display = "block";
  closebtn.style.display = "block";
  img.style.display = "block";
  img.style.width = "40%";
}

  // score render
function scoreRender() {
  // calculate the amount of question percent answered by the user
  let scorePerCent = Math.round((100 * score) / questions.length);
  scoreDiv.innerHTML += "<p> Your score is " + scorePerCent + "%</p>";

  quiz.style.display = "none";
  scoreDiv.style.display = "block";
  resetbtn.style.display = "block";
  closebtn.style.display = "block";
  img.style.display = "block";
  img.style.width = "40%";
}

// clear progress
function clearProgress() {
  // empties prog class and container so % is not incremented and circles are white and not doubled
  questionCounter = 0;
  score = 0;
  // hides scores to show question
  document.getElementById("progress").innerHTML = "";
  document.getElementById("scoreContainer").innerHTML = "";
  // resets score
  scoreContainer.style.display = "none";
  }

function reset() {
  quiz.style.display = "block";
  resetbtn.style.display = "none";
  closebtn.style.display = "none";
  img.style.display = "none";

  clearProgress();

  buildQuestion();

  renderProgress();
}

// module.exports.qIndex = qIndex;
// module.exports.buildQuestion = buildQuestion;
module.exports = buildQuestion;



