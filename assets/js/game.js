var pos = 0;
var right = 0;
var test, test_status, questions, choice, choices, chA, chB, chC, chD;
var  initalInput = document.querySelector("#initialsLable")
var isPlaying = true 

var questions = [
    {
        question: "Var is short for what?",
        a: 'variable',
        b: 'varloom',
        c: 'varroom',
        d: 'varney',
        answer: "A"
    },
    {
        question: "What Does CSS stand for?",
        a: "Capton Sam See",
        b: "Computer Screen Speed",
        c: "Cascading Style Sheet",
        d: "Computer Sea Side",
        answer: "C"
    },
    {
        question: "Where is a good website to go for coding questions?",
        a: "Petsmart.com",
        b: "Amizon.com",
        c: "Stackoverflow.com",
        d: "trufflesuite.com",
        answer: "C"
    },
    {
        question: "When coding in HTML how do you start/open a line of code?",
        a: "[]",
        b: "{}",
        c: "::",
        d: "<>",
        answer: "D"
    }
]
// this will get the questions
function get(x) {
    return document.getElementById(x)
}

function reload() {
    window.location.reload();
}

//this will render a question to display on the page
function renderQuestion() {
    test = get("test")
    if(pos >= questions.length) {
        isPlaying = false;
        get("test_status").innerHTML = "All Done!.";
        document.getElementById("test").innerHTML = "<p>Your Final Score is: "+(100/questions.length) * correct+".</p>"
        test.innerHTML += "<p>Enter Your Initials to Save Your Score </p>"+"<label><input type='text' id='initialsLabel'></label>"+
        "<button type='submit' id='initials'>Submit Initals</button>"
        var initialsEl = document.getElementById("initials")
        initialsEl.onclick = scoreBoard
        //will allow the user to restart
        pos = 0
        correct = 0
        return false
    }

    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length

    question = questions[pos].question
    chA = questions[pos].a
    chA = questions[pos].b
    chA = questions[pos].c
    chA = questions[pos].d
    // display the question and the anwsers
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>"
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>"
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>"
    test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br>"
    test.innerHTML += "<button onclick= 'checkAnswer()'>Submit Anwser</button>"

}

// checks user input for the anwers
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for(var i = 0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    // see if the input is the right one
    if(choice == questions[pos].answer){
        correct++
        console.log(correct)
    }
    pos++
    localStorage.setItem("correctScore", ((100/questions.length)*correct))
    renderQuestion()
}

var scoreBoardEl = document.getElementById("scores")

function scoreBoard() {
    var initialsLabelEl = document.getElementById("initialsLabel")
    localStorage.setItem("name", initialsLabelEl)

    get("test_status").innerHTML = "High Score"
    test.innerHTML = "<h3>Your Score</h3>"+"<ul></ul>"
    test.innerHTML += "<li>1. "+localStorage.getItem("name")+"</li>"+localStorage.getItem("correctScore")
    
    //button if they would like to play again
    test.innerHTML += "<button type='submit' id='play-again'>Would You Like to Play Again?</button>"
    var plaAgainEl = document.getElementById("play-again")
    plaAgainEl.onclick = reload
    
}

var count = 0
//timer
var timerEl = document.getElementById("time")
var startEl = document.getElementById("start")
// this will count down
function countdown() {
    var timeLeft = 50
    var timeInterval = setInterval(function() {
        if(!isPlaying) {
            clearInterval(timeInterval)
        } else if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            // decrease time by 1
            timeLeft--
        } else {
            timerEl.textContent = ""
            document.getElementById("test_status").innerHTML="Time is Out!!!"
            document.getElementById("test").innerHTML="You Have Ran Out of Time!!!"+"<button type='submit' id='try-again'>Try Again</button>"

            var tryAgainEl = document.getElementById("try-again")
            tryAgainEl.onclick = reload

            clearInterval(timeInterval)
        }
    }, 1000)

}
startEl.onclick = countdown

startEl.addEventListener("click", renderQuestion)
scoreBoardEl.onclick = scoreBoard


















 
