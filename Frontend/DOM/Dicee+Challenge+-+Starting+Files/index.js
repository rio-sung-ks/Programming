var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1)

var player1 = "./images/dice" + randomNumber1 + ".png";
var player2 = "./images/dice" + randomNumber2 + ".png";

if (player1 > player2){
    var result = "player1 wins ⛳️"
}
else if(player1 === player2){
    var result = "Draw !"
}
else{
    var result = "⛳️ player2 wins"
}

var img1 = document.getElementsByTagName("img")[0];
var img2 = document.getElementsByTagName("img")[1];

img1.setAttribute("src",player1);
img2.setAttribute("src",player2);

document.querySelector("h1").innerHTML = result;