var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var paraDisplay = document.querySelector("p span");
var scoreCard = document.getElementById("scoreCard");
var p1TotalDisplay = document.getElementById("p1Total");
var p2TotalDisplay = document.getElementById("p2Total");
var win = document.getElementById("win");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 0;
var p1Total = 0;
var p2Total = 0;
numInput.value = 0;

p1.addEventListener("click", function () {
    if(!gameOver && numInput.value!=0) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
            p1Total += 1;
            p1TotalDisplay.textContent = p1Total;
            scoreCard.innerHTML += "<pre><Strong>Player 1</Strong> +1    <Strong>Player 2</Strong> 0</pre>";
            winning();
        }
        p1Display.textContent=p1Score;
    }
    if(numInput.value == 0) {
        alert("Set the winning Score");
    }
});
p2.addEventListener("click", function() {
    if(!gameOver && numInput.value!=0) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
            p2Total += 1;
            p2TotalDisplay.textContent = p2Total;
            scoreCard.innerHTML += "<pre><Strong>Player 1</Strong> 0&nbsp;    <Strong>Player 2</Strong> +1</pre>";
            winning();
        }
        p2Display.textContent=p2Score;
    }
    if(numInput.value == 0) {
        alert("Set the winning Score");
    }
});
reset.addEventListener("click", function() {
    reSet();
});
function reSet() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    winning();
};

function winning () {
    if (p1Total>p2Total) {
        win.textContent = "Player1";
    } else if (p2Total>p1Total) {
        win.textContent = "Player2";
    } else {
        win.textContent = "No Winner Yet";
    }
};
numInput.addEventListener("change", function() {
    paraDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reSet();
    if (this.value<0) {
        winningScore = 5;
        paraDisplay.textContent = 5;
        numInput.value=5;
        alert("Winning score can't be below 0. Setting it for 5");
    }
});
