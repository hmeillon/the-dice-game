var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomNumber2= Math.floor(Math.random() * 6) + 1;

function diceFace1(){
    document.querySelector(".img1").setAttribute("src", "./assets/images/dice" + randomNumber1 + ".png");
}

function diceFace2(){
    document.querySelector(".img2").setAttribute("src", "./assets/images/dice" + randomNumber2 + ".png");
}

function winner(){
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "<em>Player 1 Wins!</em>";
        document.querySelector(".player1").innerHTML = "Player 1 🎉";

    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "<em>Player 2 Wins!</em>";
        document.querySelector(".player2").innerHTML = "Player 2 🎉";
    }
    else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!";
        document.querySelector(".player1").innerHTML = "Player 1 😱";
        document.querySelector(".player2").innerHTML = "Player 2 😱";
    }
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        diceFace1();
        diceFace2();
        winner();
        document.querySelector("button").innerHTML = "Replay!";

    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}