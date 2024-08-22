import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";
ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 2, 48, 5];
// console.log(numbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumber = numbers.map( (x) => ( 2 * x ));
console.log(newNumber)
////Filter - Create a new array by keeping the items that return true.
const newNumbers = numbers.filter(function(num) {
  return num < 10;
});
const filterNumber = numbers.filter( (x) => ( x <10))
console.log(filterNumber)
// Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})

const reduceNumber = numbers.reduce(function (a, currentNum) {
  return a + currentNum;
});
console.log(reduceNumber);

//Find - find the first item that matches from an array.
const newNumber = numbers.find(function (num) {
  return num > 10;
})
const findNum = numbers.find((x) => x > 2);
console.log(findNum);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const FindindexNum = numbers.findIndex((x) => x > 10);
console.log(FindindexNum);
