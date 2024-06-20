var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
// var index = 0;
var started = false;
var level = 0;

$(document).on("keypress",function(){  
  // nextSequence(); 
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
  else{
    gamePattern = [];
    level = 0;
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }

});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

})

function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");  
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence(){

    userClickedPattern = [];
    level = level + 1;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);  

}

function playSound(name){
    var audio = new Audio("./sounds/" + name + '.mp3');
    audio.play();        
}



function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
    if(gamePattern.length === userClickedPattern.length){
      setTimeout( function(){
        nextSequence();
        
      }, 1000);
      
    }
  }

  else{
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();        
    console.log("wrong wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");  
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 100);
      
  }  
}


