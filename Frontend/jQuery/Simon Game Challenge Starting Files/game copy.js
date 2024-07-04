var buttonColours = ["red","blue","green","yellow"];
var randomNumber = Math.floor(Math.random() * 4);
var randomColor = buttonColours[randomNumber]

var gameSequence = [];
var clickSequence = [];

$(document).on("keypress",function (){
    // 키를 안누르고 마우스 클릭하면 game over 추가
    $("h1").text("Level 1");
    $("."+randomColor).addClass("pressed");
    setTimeout(function(){
        $("."+randomColor).removeClass("pressed");    
    }, 100);    
    gameSequence.push(randomColor);
});


$(".btn").click(function(){
    var clickedColor = this.id;
    $("."+clickedColor).addClass("pressed");
    setTimeout(function(){
    $("."+clickedColor).removeClass("pressed");    
    }, 100);    
    clickSequence.push(clickedColor);
    var shouldContinue = true;
   
    for(var i=0;i<clickSequence.length;i++){
        if(gameSequence[i] === clickSequence[i]){   
        }
        else {
            shouldContinue = false;
            alert("wrong");
        }
    }
    var nextRandomNumber = Math.floor(Math.random() * 4);
    var nextRandomColor = buttonColours[nextRandomNumber];
    gameSequence.push(nextRandomColor);    
}    
);