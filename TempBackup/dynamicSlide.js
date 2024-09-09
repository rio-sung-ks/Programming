var SlideIndex = 0;
var slideInterval;
var isPaused = false;

function slideShow(interval) {
    if (interval == undefined) {
        interval = 1000;
    }
    slideInterval = setInterval(function () {        
        var i;
        var x = document.getElementsByClassName("slidevalue1");  //slide1에 대한 dom 참조
        var y = document.getElementsByClassName("slidevalue2");
        var z = document.getElementsByClassName("slidevalue3");
        var k = document.getElementsByClassName("slidevalue4");
        var m = document.getElementsByClassName("slidevalue5");
        var n = document.getElementsByClassName("slidevalue0");

        // var y = document.getElementsByClassName("textsample")
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
        z[i].style.display = "none";
        k[i].style.display = "none";
        m[i].style.display = "none";
        n[i].style.display = "none";
        //처음에 전부 display를 none으로 한다.
        }
        SlideIndex++;
        if (SlideIndex > x.length) {
            SlideIndex = 1;  //인덱스가 초과되면 1로 변경
        }   
        x[SlideIndex-1].style.display = "block";  //해당 인덱스는 block으로
        y[SlideIndex-1].style.display = "block";
        z[SlideIndex-1].style.display = "block";
        k[SlideIndex-1].style.display = "block";
        m[SlideIndex-1].style.display = "block";
        n[SlideIndex-1].style.display = "block";
    }, interval);
    // setTimeout(slideShow, 3000);   //함수를 4초마다 호출    
}