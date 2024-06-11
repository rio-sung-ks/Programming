var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(document).on("keypress",function(){  
  nextSequence(); 
  // alert("here too!")
});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
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
