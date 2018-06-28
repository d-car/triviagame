var correct = 0;
var incorrect = 0;
var timerNumber = 30;
var buttonTimer = document.getElementById("buttonTimer");
var startButton = document.getElementById("startGame");
var gameArea = document.getElementById("gameArea");
var row1 = document.getElementById("optradio-1");
var row2 = document.getElementById("optradio-2");
var row3 = document.getElementById("optradio-3");
var row4 = document.getElementById("optradio-4");
var radios1 = document.getElementsByName('optradio-1');
var radios2 = document.getElementsByName('optradio-2');
var radios3 = document.getElementsByName('optradio-3');
var radios4 = document.getElementsByName('optradio-4');
var radios5 = document.getElementsByName('optradio-5');
var radiosArray = [radios1, radios2, radios3, radios4, radios5]
var gameStatus = false;
var guessArray = [];
var resultsArray = [$(".col-md-12-q1"), $(".col-md-12-q2"), $(".col-md-12-q3"), $(".col-md-12-q4"), $(".col-md-12-q5"), $("#row-2"), $("#row-4"), $("#timer")];
var correctArray = [];

//=================================================================================================================


// Resets round score and timer
function reset() {
    gameStatus = false;
    console.log(gameStatus);
    correct = 0;
    incorrect = 0;
    timerNumber = 10;
    runGame();

}  

// Runs the clock down
function runClock() {
    clearInterval(timerNumber);
    intervalId = setInterval(countDown, 1000);
}

// Sets up countdown instructions and calls stopGame();, alerts that time is up, and calls results();
function countDown() {
        $("#startGame").hide();
        timerNumber--;
        $("#timer").html("<h2>" + timerNumber + " Seconds Left!" + "</h2>");
        if (timerNumber === 0) {
            alert("Time's Up! Let's See How Ya Did");
            stopGame();
            results();}
}

// Displays the results of the game
function results() {
    gameStatus = false;
    stopGame();
    checkRadios();
    $(".lead").text("Results");
    timerNumber = 0;
    $("#row-1").html("<h2>" + "Correct: " + correct + "</h2>");
    $("#row-3").html("<h2>" + "Incorrect: " + incorrect + "</h2>");
    $("#row-5").html("<h2>" + "Thanks for Playing!");
    for (i = 0; i < resultsArray.length; i++) {
        $(resultsArray[i]).hide();}
    $("#submitReset").html("<button type='button' class='btn btn-primary' id='submitReset' onClick='runGame()'>Play Again</button>")
    console.log(gameStatus)
}

// Clears Timer
function stopGame() {
    clearInterval(intervalId);
}

// Runs Game.  This is actually called in the html with the onClick att.
function runGame() {
    gameStatus = true;
    countDown();
    runClock();
    displayBoard();
    console.log(gameStatus);
}


// DISPLAYS THE QUESTIONS AND ANSWERS
function displayBoard() {
    $(".lead").text("Good Luck!");
    $("#gameArea").show(gameArea);
}


// Hides #gameArea until runGame(); is called
$(document).ready(function() {
    $("#gameArea").hide();
})

function checkRadios() {
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            var answer = (radios1[i].value);
            if (answer == 0) {
                // console.log("correct");
                correct++;
            } else {incorrect++}
            break;
            
        }
    }    
}

console.log(gameStatus);
// userGuess();



