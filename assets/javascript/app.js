var correct = 0;
var incorrect = 0;
var timerNumber = 10;
var buttonTimer = document.getElementById("buttonTimer");
var startButton = document.getElementById("startGame");
var gameArea = document.getElementById("gameArea");
var a1 = document.getElementById("q1-2");
var a2 = document.getElementById("q2");
var a3 = document.getElementById("q3");
var a4 = document.getElementById("q4");
var a5 = document.getElementById("q5");
var a6 = document.getElementById("q6");
var gameStatus = false;
var guessArray = [];
var resultsArray = [$(".col-md-12-q1"), $(".col-md-12-q2"), $(".col-md-12-q3"), $(".col-md-12-q4"), $(".col-md-12-q5"), $("#row-2"), $("#row-4"), $("#timer")]

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
    $(".lead").text("Instructions go here.");
    $("#gameArea").show(gameArea);
}


// Hides #gameArea until runGame(); is called
$(document).ready(function() {
    $("#gameArea").hide();
})

function userGuess() {
    $("input").on("click", function() {
        var guessCount = $("input:checked").val();
        console.log(guessCount);
      });
}


console.log(gameStatus);
userGuess();



