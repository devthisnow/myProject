"use strict";

const prompt = require("prompt-sync")();

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(this.name);

//alert( names ); // Вася, Петя, Маша

console.log(names);