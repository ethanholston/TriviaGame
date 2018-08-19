//Variables
var questions = [
    {q: "question 1",
     a: "a",
    b: "b",
    c: "c",
    d: "d"},
    {q: "question 1",
    a: "a",
   b: "b",
   c: "c",
   d: "d"},
    {q: "question 2",
    a: "a",
    b: "b",
    c: "c",
    d: "d"}
    ];





//Functions

function setHtml(){
    $("#timer").text();
    $("#question").html(question + "<br>");
    $("#answerA").html(answerA + "<br>");
    $("#answerB").html(answerB + "<br>");
    $("#answerC").html(answerC + "<br>");
    $("#answerD").html(answerD + "<br>");
}




//Gameplay

for(i=0; i<questions.length; i++){
    var question = questions[i].q;
    var answerA = questions[i].a;
    var answerB = questions[i].b;
    var answerC = questions[i].c;
    var answerD = questions[i].d;
    setHtml();
}