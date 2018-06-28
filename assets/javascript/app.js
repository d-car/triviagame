var correct = 0;
var incorrect = 0;
var timerNumber = 60;
var buttonTimer = document.getElementById("buttonTimer");
var startButton = document.getElementById("startGame");
var a1 = document.getElementById("q1-2");
var a2 = document.getElementById("q2");
var a3 = document.getElementById("q3");
var a4 = document.getElementById("q4");
var a5 = document.getElementById("q5");
var a6 = document.getElementById("q6");
var gameStart = false;


$("#startButton").click(runGame())   

function runClock() {
    clearInterval(timerNumber);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    timerNumber--;
    $("#timer").html("<h2>" + timerNumber + "</h2>");
    if (timerNumber === 0) {
        stopGame();
        alert("Time Up! Let's See How Ya Did");
        results();
    }
}

function stopGame() {
    clearInterval(intervalId);
}

function ready() {
    document.gameStart;
}

function runGame() {
    var gameStart = true;
    if (gameStart = true) {
        displayAll()
    }
    else {
        $(".lead").text("False"); 
    }
}

function displayAll() {
    $(".lead").text("Instructions go here.");
}

function startTimer() {

}

runClock()
console.log(timerNumber)





