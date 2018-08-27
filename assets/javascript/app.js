//Variables
var questions = [
    {q: "Who has the most wins as a head coach in the NFL?",
     a: "George Halas",
    b: "Curly Lambeau",
    c: "Tom Landry",
    d: "Don Shula",
    ans: "Don Shula",
    ansImg: "<img src='../images/..."},
    {q: "Which NFL team features a helmet decal only on one side of the helmet?",
    a: "Houston Texans",
   b: "Jacksonville Jaguars",
   c: "Pittsburgh Steelers",
   d: "Tennessee Titans",
   ans: "Pittsburgh Steelers",
   ansImg: "<img src='../images/..."},
    {q: "Who is the last non-quarterback to win NFL MVP?",
    a: "Shaun Alexander",
    b: "Ray Lewis",
    c: "Adrian Peterson",
    d: "LaDainian Tomlinson",
    ans: "Adrian Peterson",
    ansImg: "<img src='../images/..."},
    {q: "This current NFL quarterback, a 2010 Pro Bowler, never started a game at QB in college",
    a: "Matt Schaub",
    b: "Matt Cassel",
    c: "Matt Moore",
    d: "Matt Flynn",
    ans: "Matt Cassel"},
    {q: "How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    ans: "4"},
    {q: "4 of the first 5 picks in the 1989 draft -- Troy Aikman, Barry Sanders, Derrick Thomas and Deion Sanders -- are in the Hall of Fame. Who was the bust?",
    a: "Aundray Bruce",
    b: "Blair Thomas",
    c: "Keith McCants",
    d: "Tony Mandarich",
    ans: "Tony Mandarich"},
    {q: "Which of these teams was NOT an original NFL team that moved over to the AFC?",
    a: "Cleveland Browns",
    b: "Indianapolis Colts",
    c: "Oakland Raiders",
    d: "Pittsburgh Steelers",
    ans: "Oakland Raiders"},
    {q: "Who is the only player enshrined in Canton AND in the CFL Hall of Fame?",
    a: "Fred Biletnikoff",
    b: "Warren Moon",
    c: "Joe Theismann",
    d: "Doug Flutie",
    ans: "Warren Moon"},
    {q: "This state has produced more pro football Hall of Famers than any other state",
    a: "California",
    b: "Ohio",
    c: "Pennsylvania",
    d: "Texas",
    ans: "Pennsylvania"},
    {q: "Who is the only Super Bowl MVP to have played on the losing team?",
    a: "Larry Fitzgerald",
    b: "Chuck Howley",
    c: "Dan Marino",
    d: "Steve McNair",
    ans: "Chuck Howley"},
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
    $("#timer").html("<h2>" + number + " seconds left</h2>").removeClass("red").addClass("border");
    $("#question").html("<h2>" + question + "<h2>");
    $("#answerA").html($("<button>").addClass("btn answer").html(answerA));
    $("#answerB").html($("<button>").addClass("btn answer").text(answerB)).append("<br>");
    $("#answerC").html($("<button>").addClass("btn answer").text(answerC));
    $("#answerD").html($("<button>").addClass("btn answer").text(answerD));
    
}

function timer() {
  if (!intervalId) {
    intervalId = setInterval(decrement, 1000);
  }
  $("#timer").addClass("border");
  number=30;
}

function decrement() {
  number--;
  $("#timer").html($("<h2>").text(number + " seconds left"));
  if (number === 0) {
    stop();
    showAns();
  }
  if(number <= 10){
      $("#timer").addClass("red");
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function showAns(){
    $("#answerA").empty().removeClass("answer");
    $("#answerB").empty().removeClass("answer");
    $("#answerC").empty().removeClass("answer");
    $("#answerD").empty().removeClass("answer");
    if(selected === questions[questionNum].ans){
        // $("#question").html("<h2>Correct!</h2>");

        correct++;
    }
    else if(selected === ""){
        $("#question").html($("<h2>").html("Out of time!<br><br>").
        append($("<h2>").text("The correct answer was " + questions[questionNum].ans)));
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
    $("#start").detach();
    questionNum = 0;
    correct = 0;
    incorrect = 0;
    noAns = 0;
    questionSetup();
}

function gameOver(){
    $("#question").html("<h2>All done! Here's how you did!</h2><br><h3 id='right'></h3><h3 id='wrong'></h3><h3 id='no-answer'></h3><button type='button' id='restart' class='btn'>Start Over</button>");
    $("#right").text("Correct answers: " + correct);
    $("#wrong").text("Incorrect answers: " + incorrect);
    $("#no-answer").text("Not answered : " + noAns);
}

function questionSetup(){
    timer();
    question = questions[questionNum].q;
    answerA = questions[questionNum].a;
    answerB = questions[questionNum].b;
    answerC = questions[questionNum].c;
    answerD = questions[questionNum].d;
    selected = "";
    setHtml();
}

//Gameplay

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

$("#start").on("click", function(){
    newGame();
});
