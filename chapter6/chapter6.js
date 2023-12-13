"use strict";

// function sayHello(){
//     let you = prompt("What is your name?");
//     alert(`Hello ${you}!`);
// }

// sayHello();

// let sayHello = function(){
//     let you = prompt("What is your name?");
//     alert(`Hello ${you}!`);
// }

// sayHello();

//exercise 6.1
// function getSum(){
//     let firsNo = parseInt(prompt("Please provide your first number:"));
//     let secondNo = parseInt(prompt("Please provide a second number:"));
//     let addNos = firsNo + secondNo;
//     console.log(addNos)
// }

// getSum();

//exercise 6.2

// let adjectives = ["Big", "Strong", "Clever", "Polite", "Kind"];
// function describePerson(){
//     let personName = prompt("What is your name?");
//     let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
//     console.log(`Hello ${randomAdj} ${personName}`);
// }

// describePerson();


// let addTwoNumbers = function (num1, num2) {
//     return num1 + num2;
// }
// alert("Give me two numbers to add.");
// let num1 = parseInt(prompt("Insert first number:"))
// let num2 = parseInt(prompt("Insert second number:"))
// let result = addTwoNumbers(num1, num2);
// alert(`Your answer is ${result}`);


//exercise 6.3

// let number1 = parseInt(prompt("Insert first number:"));
// let number2 = parseInt(prompt("Insert second number:"));
// let operator = "-";
// function calculate(a, b, op){
//     if (op == "-"){
//         console.log(a - b);
//     } else {
//         console.log(a + b);
//     }
// }
// calculate(number1, number2, operator);

// function addTwoNumbers(x = 2, y = 3){
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);

//special functions and operators
//arrow functions

// function doingStuff(x){
//     console.log(x);
// }

// let doingArrowStuff = x => console.log(x);

// doingArrowStuff("Great!");

// let addTwoNumbers = (x = 2, y = 3) => console.log(x + y);
// addTwoNumbers();

//spread operator
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);

// let fname = prompt("What is your name?")

// function alertName(fname){
//     alert(`Your name is ${fname}`);
// }

// let alertName = fname => console.log(`Your name is ${fname}`);

// alertName();

// function randomNumber(){
//     return Math.random();
// }

// console.log((() => Math.random())());

// let name = prompt("What is your name?");
// (fname => alert(`Your name is ${fname}`))(name);

// let n1 = parseInt(prompt("Give me a number:"));
// let n2 = parseInt(prompt("Give me a second number:"));
// ((num1, num2) => alert(`your answer is ${num1 + num2}`))(n1,n2)

// let add = (num1, num2) => alert(`Your answer is ${num1 + num2}`);
// add(n1, n2);

// let colours = ["Blue", "Red", "White", "Green"];
// colours.forEach(e => console.log(e + " is my favourite colour"));

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumbers(x, y){
//     console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a){
//     console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);
// addFourNumbers(5, 9, 6, 7);

//rest parameter

// function someFunction(param1, ...param2){
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");


// function someFunction(param1, param2){
//     console.log(param1, param2);
//     for(let p of param2){
//         console.log(p);
//     }
// }
// someFunction("hi", "there!", "How are you?"); 

// function someFunction(param1, ...param2){
//     console.log(param1, param2);
//     for(let p of param2){
//         console.log(p);
//     }
// }
// someFunction("hi", "there!", "How are you?", "aaa", "bbb");

//returning function values
// function addTwoNumbers(x, y){
//     console.log(x + y);
// }
// let result = addTwoNumbers(4, 5);
// console.log(result);

// function addTwoNumbers(x, y) {
//     return x + y;
// }

// let result = addTwoNumbers(4, 5);
// console.log(result);
// console.log(addTwoNumbers(30, 90));

// let resultsArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultsArr.push(result);
// }

// console.log(resultsArr);

//exercise 6.4

// let SumArr = [];
// for (let i = 0; i < 10; i++) {
//     let value1 = i * 5;
//     let value2 = i * i;
//     let res = calculate(value1, value2, "+");
//     SumArr.push(res);
// }
// console.log(SumArr)

// function calculate(a, b, op) {
//     if (op == "-") {
//         return (a - b);
//     } else {
//         return (a + b);
//     }
// }


//returning with arrow functions

// let myArr = [];
// let cal = (val1, val2, op) => {
//     if (op == "-") {
//         return val1 - val2;
//     } else {
//         return val1 + val2;
//     }
// }
// for (let x = 0; x < 10; x++) {
//     let val1 = 5 * x;
//     let val2 = x * x;
//     let res = cal(val1, val2)
//     myArr.push(res);
// }
// console.log(myArr);

// function testAvailability(x){
//     console.log("Available here:", x);
// }

// testAvailability("Hi");
// console.log("Not available here:", x);

// function testAvailability(){
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }

// let z = testAvailability();
// console.log("outside the function:", z);
// console.log("Not available here:", y);

// function doingStuff(){
//     if (true) {
//         var x = "local";
//     }
//     console.log(x);
// }

// doingStuff();

// function doingStuff(){
//     if (true) {
//         let x = "local";
//     }
//     console.log(x);
// }

// doingStuff();

// let x;
// function confuseReader(){
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// }

// confuseReader();
// console.log("Outside of function:", x);

// function doingStuff(){
//     const x = "local"
//     if (true){
//     }
//     console.log(x);
// }

// doingStuff();


//Global variables

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x){
//     console.log("Access to global vars inside function.", globalVar);
// }

// creatingNewScope("some parameter");

// console.log("Still available:", globalVar);

// let x = "global";

// function doingStuff(){
//     let x = "local";
//     console.log(x)
// }

// doingStuff();
// console.log(x);

// function confuseReader(){
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// }

// confuseReader();
// console.log("Outside of function:", x);

// let printFunc = function(){
//     console.log("IIFE!");
// };
// printFunc();

//IIFE WITHOUT PARAMS

// (function () {
//     console.log("IIFE!");
// })();

//IIFE With params
// (function (x,y){
//     console.log(x+y);
// })(10, 12);

// (function (a,b){
//     console.log(a.concat(b));
// })("Hello ", "World");

//arrow IIFE
// (()=>{
//     console.log("run right away");
// })();

// ((x, y)=>{
//     console.log(x, y)
// })("Hello", "World");

//practice ex 6.5
// let x = "1000";
// console.log(x);
// (()=>{
//     let x = "2000";
//     console.log(x);
// })();
// let result = (()=>{
//     let x = "3000"
//     return x;
// })();
// console.log(result);

// ((x)=> {
//     console.log(`printing param ${x}`);
// })(4000);

// console.log(x);

// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);

// function getRecursive(nr){
//     console.log(nr);
//     if (nr > 0){
//         getRecursive(--nr);
//     }
// }

// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function:", nr);
//     if (nr > 0){
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr)
// }

// logRecursive(4);

//exercise 6.6
// function calcFactorial(nr){
//     console.log(nr);
//     if (nr === 0){
//         return 1;
//     } else {
//         return nr * calcFactorial(--nr);
//     }
// }
// let num = parseInt(prompt("Give me a number and I will give you the factorial:"));
// alert("The factorial is: " + calcFactorial(num));

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
//     // console.log(x) cannot access inner function variables
// }
// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr){
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }

// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr){
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z = 10;
//     }
// }

// doInnerFunctionStuff(3)

//exercise 6.7
// let start = 10;
// function loop1(val){
//     console.log(val);
//     if (val < 1) {
//         return;
//     }
//     return loop1(val - 1);
// }
// loop1(start);

// function loop2(val){
//     console.log(val);
//     if (val > 0) {
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);

//anonymous functions
//ex 6.8
// let doingStuff = function(val){
//     console.log(val);
// }
// doingStuff("Hello 1");

// function functionStuff(val){
//     console.log(val);
// }
// functionStuff("Hello 2");

// function addNums() {
//     alert(1+2);
// }

// let functionVariable = function () {
//     console.log("Not so secret though.");
// }
// functionVariable();

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }

// doFlexibleStuff(functionVariable);
// doFlexibleStuff(addNums);

// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
// };

// setTimeout(youGotThis, 1000);
// setInterval(youGotThis, 1000)

//chapter project
//recursive function
// const main = function counter(i) {
//     console.log(i);
//     if (i < 10) {
//         return counter(i + 1);
//     }
//     return;
// }
// main(0);

// //set timeout order
// const one = () => console.log('one');
// const two = () => console.log('two');
// const three = () => {
//     console.log('three');
//     one();
//     two();
// }
// const four = () => {
//     console.log('four');
//     setTimeout(one, 0);
//     three();
// }
// four();

