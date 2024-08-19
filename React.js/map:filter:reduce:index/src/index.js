import emojipedia from "./emojipedia";
console.log(emojipedia);

// array 안에 있는 text element를 string < 100 제한
const newEmojipediaEntry = emojipedia.map(function (emojipediaEntry) {
  return emojipediaEntry.meaning.substring(0, 100);
});

console.log(newEmojipediaEntry);


// var numbers = [3, 56, 2, 48, 5];
// var newNumbers = [];

// function double(x) {
//     newNumbers.push(x * 2);  (forEach)
//     return x * 2;
// }

//Map -Create a new array by doing something with each item in an array.
// const numbersMap = numbers.map(double)
// console.log(numbersMap)

// forEach
// numbers.forEach(double);
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const filterNumber = numbers.filter(function (num) {
//   return num > 10;
//     });
// console.log(filterNumber);

// var newNumbers = [];
//     numbers.forEach(function(num){
//         if(num < 10){
//             newNumbers.push(num);
//         }
//     })
// console.log(newNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.
var numbers = [3, 56, 2, 48, 5];
// var newNumber = 0;
// numbers.forEach(function (currentNum) {
//   newNumber += currentNum;
// });
// console.log(newNumber);

// var newNumber = numbers.reduce(function (accumulate, currentNum) {
//   return accumulate + currentNum;
// });
// console.log(newNumber);

//Find - find the first item that matches from an array.
//    const newNumber =  numbers.find(function(num){
//         return num > 10;
//     })
//     console.log(newNumber)


//FindIndex - find the index of the first item that matches.
    const newNumber =  numbers.findIndex(function(num){
        return num > 10;
    })
    console.log(newNumber)