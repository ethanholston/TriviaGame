//Variables
var questions = [
    {q: "question 1",
     a: "a",
    b: "b",
    c: "c",
    d: "d",
    ans: "c",
    ansImg: "<img src='../images/..."},
    {q: "question 2",
    a: "a",
   b: "b",
   c: "c",
   d: "d",
   ans: "b",
   ansImg: "<img src='../images/..."},
    {q: "question 3",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    ans: "c",
    ansImg: "<img src='../images/..."},
    {q: "question 4",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    ans: "a"},
    {q: "question 5",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    ans: "a"},
    {q: "question 6",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    ans: "a"},
    ];

var selected; 
var questionNum;
var answerselected;
var question;
var answerA;
var answerB;
var answerC;
var answerD;
var number;
var intervalId;
var correct;
var incorrect;
var noAns;

//Functions

function setHtml(){
    $("#timer").html("<h2>" + number + " seconds left</h2>");
    $("#question").html(question + "<br>");
    $("#answerA").html(answerA + "<br>");
    $("#answerB").html(answerB + "<br>");
    $("#answerC").html(answerC + "<br>");
    $("#answerD").html(answerD + "<br>");
}

function timer() {
  if (!intervalId) {
    intervalId = setInterval(decrement, 1000);
  }
  number=30;
}

function decrement() {
  number--;
  $("#timer").html("<h2>" + number + " seconds left</h2>");
  if (number === 0) {
    stop();
    showAns();
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function showAns(){
    $("#answerA").empty();
    $("#answerB").empty();
    $("#answerC").empty();
    $("#answerD").empty();
    if(selected === questions[questionNum].ans){
        $("#question").html("<h2>Correct!</h2>");
        correct++;
    }
    else if(selected === ""){
        $("#question").html("<h2>Out of time!</h2><br><h3>The correct answer was " + questions[questionNum].ans + "</h3>");
        noAns++;
    }
    else{
        $("#question").html("<h2>Nope!</h2><br><h3>The correct answer was " + questions[questionNum].ans + "</h3>");
        incorrect++;
    }
    setTimeout(nextQ, 3000);
}

function nextQ(){
    questionNum++;
    if(questionNum < questions.length){
        questionSetup();
    }
    else{
        gameOver();
    }
}

function newGame(){
    questionNum = 0;
    correct = 0;
    incorrect = 0;
    noAns = 0;
    questionSetup();
}

function gameOver(){
    $("#question").html("All done! Here's how you did!<br><button id='restart'>Restart</button><br><br><h3 id='right'></h3><h3 id='wrong'></h3><h3 id='no-answer'></h3>");
    $("#right").text("Correct answers: " + correct);
    $("#wrong").text("Incorrect answers: " + incorrect);
    $("#no-answer").text("Not answered : " + noAns);
}

function questionSetup(){
    timer();
    setHtml();
    question = questions[questionNum].q;
    answerA = questions[questionNum].a;
    answerB = questions[questionNum].b;
    answerC = questions[questionNum].c;
    answerD = questions[questionNum].d;
    selected = "";
    setHtml();
//Gameplay


}

$("#answerA").on("click", function(){
    selected = questions[questionNum].a;
    showAns();
    stop();
})
$("#answerB").on("click", function(){
    selected = questions[questionNum].b;
    showAns();
    stop();
})
$("#answerC").on("click", function(){
    selected = questions[questionNum].c;
    showAns();
    stop();
})
$("#answerD").on("click", function(){
    selected = questions[questionNum].d;
    showAns();
    stop();
})
$(document).on("click", "#restart", function(){
    newGame();
})

newGame();