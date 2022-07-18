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