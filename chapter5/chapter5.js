"use strict";

// let i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

// let someArray = ["Mike", "Antal", "Emir", "Louiza", "Jacky"];
// let notFound = true;

// while (notFound && someArray.length > 0){
//     if (someArray[0] === "Louiza"){
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//     }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// let fibonacciArray = [];

// while (fibonacciArray.length < 25){
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray)

//exercise 5.1
// const max = 5;
// const ranNumber = Math.floor(Math.random() * max) + 1;
// let correct = false;
// while (!correct) {
//     let guess = parseInt(prompt(`Guess a number 1 to ${max}`));
//     if (guess === ranNumber) {
//         correct = true;
//         console.log(`You got it right, the answer was: ${ranNumber}`);
//     } else if (guess > ranNumber) {
//         console.log("Too high");
//     } else {
//         console.log("Too low");
//     }
// }

//do while loops

// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));


//exercise 5.2
// let step = 10;
// let counter = 0

// do {
//     console.log(counter)
//     counter += step;
// } while (!(counter >= 100))


//for loops

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let arr = [];
// for (let i = 0; i < 100; i++){
//     arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 100; i += 2) {
//     arr.push(i);
// }
// console.log(arr);

//exercise 5.3

// let myWork = [];

// for (let i = 1; i < 11; i++) {
//     let lesson = {};
//     lesson.name = "Lesson " + i;
//     lesson.status = i % 2 ? true : false;
//     myWork.push(lesson);
// }
// console.log(myWork);

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     }
// }

// console.log(arrOfArrays);
// // console.table(arrOfArrays);


// for (let i = 0; i < 3; i++) {
//     console.log(" Array " + i);
//     for (let j = 0; j < 7; j++) {
//         console.log(arrOfArrays[i][j]);
//     }
// }


//exercise 5.4

// let myTable = [];
// let rows = 7;
// let columns = 3;
// let counter = 0;

// for (let i = 0; i < rows; i++){
//     let tempTable = [];
//     for (let x = 0; x < columns; x++){
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable)
// }
// console.table(myTable)

// let names = ["James", "John", "Max", "Bob", "Jair"];
// for(let i = 0; i < names.length; i++){
//     names[i] = "hello " + names[i]
// }
// console.log(names)

// let names = ["John", "Boba", "Luke", "Leia", "Johan", "Mark"];
// for (let i = 0; i < names.length; i++) {
//     if (names[i].startsWith("M")) {
//         delete names[i];
//         continue;
//     }
//     names[i] = "hello " + names[i];
// }
// console.log(names);

//exercise 5.5
// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let i = 0; i < cells + 1; i++) {
//     if (counter % 8 == 0) {
//         if (row != undefined) {
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);
// }
// console.table(grid)

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let fname of names){
//     console.log(fname);
// }

// let myArray = [];
// for (let i = 1; i <= 10; i++) {
//     myArray.push(i);
// }
// console.log(myArray);

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// for (let fnumber of myArray){
//     console.log(fnumber)
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "Black",
// };

// for (let prop in car){
//     // console.log(car[prop]);
//     // console.log(prop, car[prop])
//     console.log(prop, ":", car[prop])
// }

// let computer = {
//     colour: "White",
//     make: "HP",
//     year: 2015,
//     motherboard: "Intel i7",
// }

// for (let key in computer){
//     console.log(key, ":", computer[key]);
// }

// let array = ["Red", "White", "Blue"];
// for (let colours in array){
//     console.log(array[colours]);
// }

// for (let i = 0; i < array.length; i++){
//     console.log(array)
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "Black",
// };

// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// let arrValues = Object.values(car);
// // console.log(arrValues);

// for(let k of arrKeys){
//     console.log(k, car[k]);
// }

// for (let i = 0; i < 10; i++){
//     console.log(i);
//     if(i === 4){
//         break;
//     }
//     // console.log(i);
// }
// console.log("out of the loop");

// let cars = [
//     {
//         model: "Golf",
//         make: "Wolkswagen",
//         year: 1999,
//         color: "black",
//     },
//     {
//         model: "Picanto",
//         make: "Kia",
//         year: 2020,
//         color: "red",
//     },
//     {
//         model: "Peugot",
//         make: "208",
//         year: 2021,
//         color: "black",
//     },
//     {
//         model: "Fiat",
//         make: "Punto",
//         year: 2020,
//         color: "black",
//     }
// ];
// for (let i = 0; i < cars.length; i++){
//     if (cars[i].year >= 2020){
//         if (cars[i].color === "black"){
//             console.log("I have found my new car:", cars[i]);
//             // break;
//         }
//     }
// }

//continues
// for(let car of cars){
//     if (car.color !== "black"){
//         continue;
//     }
//     if (car.year >= 2020){
//         console.log("we could get this one:", car);
//     }
// }

// while (true) {
//     if (superLongArray[0] != 42 && superLongArray.length > 0){
//      superLongArray.shift();   
//     } else {
//         console.log("Found 42!");
//         break;
//     }
// }
// let superLongArray = [];
// while (superLongArray.length > 0 && notFound){
//     if (superLongArray[0] != 42) {
//         superLongArray.shift();
//     } else {
//         console.log("Found 42!");
//         notFound = false;
//     }
// }

// let i = 1;
// while (i < 50) {
//     i++;
//     if (i % 2 === 0) {

//         continue;

//     }
//     console.log(i);
//     i++;
// }

//exercise 5.8
// let fstring = "";
// let skippedNo = 4;
// for (let i = 1; i <= 10; i++){
//     if(i === skippedNo){
//         continue;
//     }
//     fstring+=i;
// }
// console.log(fstring);


//break, continue and nested loops

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             console.log("Found a group with two names starting with an M:");
//             console.log(groups[i]);
//             break;
//         }
//     }
// }
// for (let group of groups){
//     for(let member of group){
//         if (member.startsWith("M")){
//             console.log("found one starting with M:", member);
//             break;
//         }
//     }
// }


//break and continue and nested loops
// outer:
// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break outer;
//         }
//     }
// }

//chapter project
// let finalMultiplicationTable = [];
// let valueVariable = 10;
// for(let x = 0; x<valueVariable; x++){
//     let temp = [];
//     for(let y = 0; y<valueVariable;y++){
//         temp.push(x*y);
//     }
//     finalMultiplicationTable.push(temp);
// }
// console.table(finalMultiplicationTable);


