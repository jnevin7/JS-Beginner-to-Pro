"use strict";

// let s = "Hello";
// console.log(
//     s.concat(" there!")
//     .toUpperCase()
//     .replace("THERE", "you")
//     .concat(" You're amazing!")
// );

// let x = 7;
// console.log(Number.isNaN(x));
// console.log(isNaN(x));

// let uri = "http://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//exercise 8.1
// let decodedURIComponent = decodeURIComponent("How's%20it%20going%3f");
// console.log(decodedURIComponent);

// let paramteresURI = encodeURI("http://basescripts.com?=Hello World");
// console.log(paramteresURI);

// let str_int = "6.4";
// let float_int = parseInt(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "ob101";
// let float_binary = parseFloat(str_binary);
// console.log("type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element, index) {
//     console.log("printing stuff:", element, "on array position:", index);
// }

// arr.forEach(printStuff);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// }

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//     return typeof element === "string";
// }
// arr.filter(checkString).forEach((e, i) => console.log(e, "at index " + i));

// console.log(arr.every(checkString));

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);


// let arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr.map(x => x + 1).filter(e => e%2 === 0).forEach(e=>console.log(e));

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("hi"));

// let arr = ["Laurence", "Mike", "Kim", "Joanne", "Laurence",
//     "Mike", "Laurence", "Mike", "Laurence", "Mike"];
// let arr2 = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);

//exercise 8.3
// let arr = ["Laurence", "Mike", "Kim", "Joanne", "Laurence",
//     "Mike", "Laurence", "Mike", "Laurence", "Mike"];
// arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// }).forEach((e, i) => console.log("index ", i, e));

//practice ex 8.3
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr.map(e=> e*2);
// arr2.forEach((e, i)=> console.log("index ", i, e));
// console.log(arr2);
// arr.map(e => e * 2).forEach((e, i) => console.log("Index of  ", i, e));

// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

// let result = "Hello JavaScript";
// let arr_result= result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefuit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let letters = ["a", "b", "c"];
// let x = letters.join('-');
// console.log(x);

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

// if(poem.indexOf("pthon") != -1){
//     console.log("python not found");
// } else {console.log("found python!")}

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos2 = poem.charAt(1000);
// console.log(pos2);

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

// let s3= "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

// let caps = "HI HOW ARE YOU";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

//exercise 8.4
// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//     str = str.toLowerCase();
//     const tempArr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUppercase() + word.slilce(1);
//         tempArr.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(val));

// let words = "thIs will be capiTalized for each word";
// let newWords = changeWords(words);
// console.log(newWords)

// function changeWords(words) {
//     let words2 = words.toLowerCase();
//     let array = words2.split(" ");
//     let array2 = array.map(e => e.slice(0, 1).toUpperCase().concat(e.slice(1)));
//     array2.forEach(e => { console.log(e) });
//     return array2.join(" ");
// }

//exercise 8.5
// let sentance = "I love JavaScript";
// sentance = sentance.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// console.log(sentance);
// for (let i = 0; i < vowels.length; i++) {
//     sentance = sentance.replaceAll(vowels[i], i);
// }
// console.log(sentance);

//number methods
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// let str1 = "5";
// console.log(isNaN(str1));

//finite

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10/0));

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(2);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

// let highest = Math.max(2, 56, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// let x = 6.78;
// let y = 5.34;

// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// let negativeX = -x;
// let negativeY = -y;

// console.log("negtiveX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes",Math.ceil(negativeY));

// console.log(Math.PI);
// console.log(Math.ceil(5.7), Math.floor(5.7), Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor((Math.random() * 10) + 1));
// console.log(Math.floor((Math.random()*100)+ 1));
// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x <100; x++){
//     console.log(ranNum(1, 100))
// }

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

//dates
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Thurs Dec 07 2023 11:37:00 GMT+0200");
// console.log(stringDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200")
// console.log(stringDate);
// console.log(typeof(stringDate));

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("day of month:", d.getDate());
// console.log("month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:",d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setMonth(0);
// console.log(d);

// d.setDate(10);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);

// let d1 = Date.parse("June 5, 2021");
// console.log(d1)

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

// console.log(d.toDateString())
// console.log(d.toLocaleDateString());

//chapter projects
//employee tracking app
// class Employee {
//     constructor(first, last, years) {
//         this.first = first;
//         this.last = last;
//         this.years = years;
//     }
// }
// const person1 = new Employee("Laurence", "Svekis", 10);
// const person2 = new Employee("Jane", "Doe", 5);
// const workers = [person1, person2];
// Employee.prototype.details = function () {
//     return this.first + " " + this.last + " has worked here " +
//         this.years + " years";
// }
// workers.forEach((person) => {
//     console.log(person.details());
// });

// //menu items price calculator
// class Menu {
//     #offer1 = 10;
//     #offer2 = 20;
//     constructor(val1, val2) {
//         this.val1 = val1;
//         this.val2 = val2;
//     }
//     calTotal() {
//         return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
//     }
//     get total() {
//         return this.calTotal();
//     }
// }
// const val1 = new Menu(2, 0);
// const val2 = new Menu(1, 3);
// const val3 = new Menu(3, 2);
// console.log(val1.total);
// console.log(val2.total);
// console.log(val3.total);
