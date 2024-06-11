var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
// var index = 0;
var level = 0;

$(document).on("keypress",function(){  
  nextSequence(); 
});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(index)

})


function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");  
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}


function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);  
    level = level + 1;
    $("h1").text("Level "+level);
}

function playSound(name){
    var audio = new Audio("./sound/" + name + '.mp3');
    audio.play();        
}


function checkAnswer(currentLevel){
  
//   2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
// e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.

  var index = 
  
}