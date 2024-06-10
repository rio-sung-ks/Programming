var buttonColours = ["red","blue","green","yellow"];
var randomNumber = Math.floor(Math.random() * 4);
var randomColor = buttonColours[randomNumber]

// console.log(buttonColours[randomNumber]);
var gamePattern = [];


$(document).on("keypress",function (){
    $("h1").text("Level 1");
    $("."+randomColor).addClass("pressed");
    setTimeout(function(){
        $("."+randomColor).removeClass("pressed");    
    }, 100);    
});

// 클릭한 value 가져오기 


$(".btn").click(function(){
    var clickedColor = this.id;
    // randomColor 와 clickedColor 비교
    if (randomColor === clickedColor){
        alert("correct");
    }
    else {
        alert("wrong");
    }    
});




    






