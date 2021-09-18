// make question 1-4 store as arrys list in objects use random 
//to make questions cycal though use a for loop to go though the questions
var questions = [
    {q: "Var is short for what?", a: "A. variable B. varloom C. varroom D. varney", answer:"A"  },
    {q: "What Does CSS stand for?", a: "A. Capton Sam See B. Computer Screen Speed C. Cascading Style Sheet D. Computer Sea Side", answer:"C" },
    {q: "Where is a good website to go for coding questions?", a: "A. Petsmart.com B. Amizon.com C. Stackoverflow.com D. trufflesuite.com", answer:"C"},
    {q: "When coding in HTML how do you start/open a line of code?", a: "A. [] B. {} C. :: D. <>", answer:"D"}
]
// var  buttonEl = addEventListener(click, "#start")
// pageContentEl.querySelector("#start");
//     console.log("#start")

var fullQuestion = document.querySelector("#quiz-questions")

var startBtn = document.querySelector("#start")
 console.log(startBtn)
 

var startQuiz = function() {
    console.log("started")
    fullQuestion.style.display = "flex"
} 
startBtn.addEventListener("click", startQuiz)

// make a variable to keep score
var score = 0;
//make loop to go though the questions
// when awser is wrong it will subtract time
// make the multiple choose question buttons with append childs

//make it so that when the game is over or if the time is out then the game ends
// make the player able to save there score in local storage at end of game
/* I realize that this in not done. I just wanted to turn in at lest somthing in on time becuse the last projest
that I turned in late said that it was not going to be added to my finale score. I will be turning in a complet
project in a few days. */