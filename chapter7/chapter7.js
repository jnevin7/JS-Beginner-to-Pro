"use strict";

// class ClassName {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("arg1", "arg2");

// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }

// let dog = new Dog("Jacky", 30, "brown", "labrador");

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// let dog2 = new Dog("Pan", 36, "yellow", "golden retriever")

// console.log(`${dog2.dogName} is a ${dog2.breed} and weighs ${dog2.weight} kg`);
// console.log(dog, dog2);

// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Maaike", "van Putten");
// console.log("Hi", p.firstname);

// let q = new Person("James");
// console.log("Hi", q.firstname, q.lastname)

// class Person {
//     constructor(firstname, lastname = "Doe"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Jack")
// console.log("Hi", p.firstname, p.lastname);

//exercise 7.1
// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let j = new Person("Jack", "Harry");
// let q = new Person("Alice", "Smith")
// console.log(`Hello ${j.firstname} and ${q.firstname}`);

//Methods
// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     greet(){
//         console.log("Hi there! I'm", this.firstname);
//     }

//     compliment(name, object) {
//         return `That's a wonderful ${object}, ${name}`;
//     }
// }

// let p = new Person("Maaike", "van Putten");
// p.greet();

// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

// let p2 = new Person("James", "Nevin");
// let compliment2 = p2.compliment("Jack", "dish"); 

// console.log(compliment2);


//exercise 7.2
// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     fullname(){
//         // return this.firstname.concat(this.lastname)
//         return this.firstname + " " + this.lastname;
//     }
// }

// let person1 = new Person("Jack", "Smith");
// let person2 = new Person("Selema", "Gomez");
// console.log(person1.fullname() + ",", person2.fullname());

// class Person {
//     #firstname;
//     #lastname;
//     constructor (firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }

// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// class Person {
//     #firstname;
//     #lastname;
// constructor (firstname, lastname) {
//     if(firstname.startsWith("M")){
//         this.#firstname = firstname;
//     } else {
//         this.#firstname = "M" + firstname;
//     }
//     this.#lastname = lastname;
// }
// }
// let p = new Person("kay", "Moon");
// console.log(p.firstname);

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname;
//         } else {
//             console.log("first name is too short");
//         }
//         if (lastname.length > 1) {
//             this.#lastname = lastname;
//         } else {
//             console.log("last name is too short");
//         }
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname;
//         } else {
//             console.log("first name is too short");
//         }
//     }

//     get lastname() {
//         return this.#lastname;
//     }

//     set lastname(lastname) {
//         if (lastname.length > 1) {
//             this.#lastname = lastname;
//         } else {
//             console.log("last name is too short")
//         }
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }

//     compliment(name, object) {
//         console.log(`${this.firstname} says that ${name} told a wonderful ${object}!`);
//     }
// }

// let p1 = new Person("James", "Nevin");
// let p2 = new Person("Sheryl", "Dreyer");



// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log("moving at", this.currentSpeed);
//     }

//     accelarate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// class Boat extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, direction) {
//         super(color, currentSpeed, maxSpeed);
//         this.direction = direction;
//     }
//     sail (){
//         console.log("Sailing to the " + this.direction);
//     }
// }

// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelarate(50);
// motor.move();
// let boat = new Boat("blue", 0, 120, "East");
// boat.sail();

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname;
//         } else {
//             console.log("first name is too short");
//         }
//         if (lastname.length > 1) {
//             this.#lastname = lastname;
//         } else {
//             console.log("last name is too short");
//         }
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname;
//         } else {
//             console.log("first name is too short");
//         }
//     }

//     get lastname() {
//         return this.#lastname;
//     }

//     set lastname(lastname) {
//         if (lastname.length > 1) {
//             this.#lastname = lastname;
//         } else {
//             console.log("last name is too short")
//         }
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }

//     compliment(name, object) {
//         console.log(`${this.firstname} says that ${name} told a wonderful ${object}!`);
//     }
// }

// let p1 = new Person("James", "Nevin");
// let p2 = new Person("Sheryl", "Dreyer");

// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };

// Person.prototype.favoriteColor = "green";

// let person1 = new Person("Maria", "Saga");
// let person2 = new Person("James", "Nevin");
// console.log(person1.favoriteColor);
// person1.introduce();
// Person.prototype.favoriteColor = "green";
// console.log(person1.favoriteColor);
// person1.favoriteColor = "pink";
// console.log(person1.favoriteColor);
// console.log(person2.favoriteColor);


//exercise 7.3

// class Animals {
//     constructor(species, sounds) {
//         this.species = species;
//         this.sounds = sounds;
//     }

//     greet(){
//         console.log(`${this.sounds}! I'm a ${this.species}!`);
//     }
// }
// Animals.prototype.performAction = function () {
//     return this.species + " is eating";
// }
// Animals.prototype.action = "jumped";
// let leopard = new Animals("Leopard", "Growl");
// let goAwayBird = new Animals("Go-Away-Bird", "Go-way!");
// leopard.greet();
// console.log(leopard.performAction());
// console.log(leopard);
//chapter project