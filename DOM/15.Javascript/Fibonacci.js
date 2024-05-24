
function fibonacciGenerator (n) {
    
    var first = 0;
    var second = 1;

    var list= [0,1] ;
    
    while(list.length !== n){
        var next = first + second;        
        list.push(next);
        first = second;
        second = next;

    }
    console.log(list);   
}
    
fibonacciGenerator(20);


