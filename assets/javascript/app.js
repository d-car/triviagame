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
var rowArray = [$("#row-1"), $("#row-3"), $("row-5")];
var clearBoard = rowArray+resultsArray;
var radiosArray = [radios1, radios2, radios3, radios4, radios5]
var gameStatus = false;
var guessArray = [];
var resultsArray = [$(".col-md-12-q1"), $(".col-md-12-q2"), $(".col-md-12-q3"), $(".col-md-12-q4"), $(".col-md-12-q5"), $("#row-2"), $("#row-4"), $("#timer")];
var correctArray = [];

//=================================================================================================================

// Hides #gameArea until runGame(); is called
$(document).ready(function() {
    $("#gameArea1").hide()
}) 

function reload() {
    document.location.reload(true);
    console.log("reload");
}

$("#submitReset").click(function() {
    results();

})

$("#reloadButton").click(function() {
    document.location.reload(true);
    console.log("reload");

})

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
    checkAnswers();
    $(".lead").text("Results");
    timerNumber = 30;
    $("#gameArea").hide();
    $("#row-1").html("<h2>" + "Correct: " + correct + "</h2>");
    $("#row-3").html("<h2>" + "Incorrect: " + incorrect + "</h2>");
    $("#row-5").html("<h2>" + "Thanks for Playing!");
    for (i = 0; i < resultsArray.length; i++) {
        $(resultsArray[i]).hide();}
    $(".col-md-12-1").html("<button type='button' class='btn btn-primary' id='reloadButton' onClick='reload()'>Play Again</button>")
    // console.log(gameStatus)
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
    $("#gameArea1").show(gameArea);
}


// Checks for the values of the selected radio buttons and adds to correct or incorrect counters.  This could have/should have been a loop that would iterate through the radiosArray array and dynamically change the "radios#" values in here.  I couldn't get it to recognize anything but the first radio button value, so I did it this way to make it work.
function checkRadios() {
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            var answer = (radios1[i].value);
            if (answer == 0) {
                console.log("correct");
                correct++;
            } else {incorrect++}
            break;
            
        }
    }
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            var answer = (radios2[i].value);
            if (answer == 0) {
                console.log("correct");
                correct++;
            } else {incorrect++}
            break;
            
        }
    } 
    for (var i = 0; i < radios3.length; i++) {
        if (radios3[i].checked) {
            var answer = (radios3[i].value);
            if (answer == 0) {
                // console.log("correct");
                correct++;
            } else {incorrect++}
            break;
            
        }
    } 
    for (var i = 0; i < radios4.length; i++) {
        if (radios4[i].checked) {
            var answer = (radios4[i].value);
            if (answer == 0) {
                // console.log("correct");
                correct++;
            } else {incorrect++}
            break;
            
        }
    } 
    for (var i = 0; i < radios5.length; i++) {
        if (radios5[i].checked) {
            var answer = (radios5[i].value);
            if (answer == 0) {
                // console.log("correct");
                correct++;
            } else {
                incorrect++}
    
            
        }
    }     
}

function checkAnswers () {
    checkRadios();
}

console.log(gameStatus);




