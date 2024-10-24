'use strict';


// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName} are ${age} years old, born in ${birthYear} `; // let is block scoped
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true; // var is function scoped
//             // creating NEW variable with the same name as the outer scope variable
//             const firstName = 'Miller'; // const is block scoped
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             } // Syntax error
//             // reassigninng outer scope variable
//             output = 'NEW OUTPUT'; // let is block scoped
//         }

//         console.log(millenial); // true
//         console.log(output); // Output from the outer scope
//     }
//     printAge();

//     return age;

// }

// const firstName = 'Jonas';
// calcAge(1991);


// ALL OF THE ABEOVE CODE IS COMMENTED OUT AND NOT EXECUTED AND WAS AN EXAMPLE OF SCOPE CHAINING

// Example of Hoisting IS THE CODE BELOW

//variable hoisting
// console.log(me); // undefined
// // console.log(job); // ReferenceError: Cannot access 'job' before initialization
// // console.log(year); // ReferenceError: Cannot access 'year' before initialization

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;


// // function hoisting

// function addDecl(a, b) {
//     return a + b;
// } // function declaration is hoisted

// const addExpr = function(a, b) { // function expression is NOT hoisted
//     return a + b;
// }

// var addArrow = (a, b) => a + b; // arrow function is NOT hoisted


// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() { // function declaration is hoisted
//     console.log('All products deleted!');
// } // function declaration is hoisted 




// var x = 1;
// let y = 2; 
// const z = 3;



// console.log(this); // undefined in strict mode

// const calcAge = function(birthYear) { // regular function
//     console.log(2037 - birthYear);
//     // console.log(this); // undefined
// };

// calcAge(1981); // undefined in strict mode 

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this); // undefined in strict mode
// } // arrow function does not have its own this  // this refers to the global object
// calcAgeArrow(1991); // undefined in strict mode

// const jonas = { 
//     year: 1982,
//     calcAge: function() {
//         console.log(this); // refers to the jonas object
//         console.log(2037 - this.year);
//     }
// };

// jonas.calcAge(); // 55

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge; // method borrowing

// matilda.calcAge(); // 20

// const f = jonas.calcAge; // f is a reference to the function
// f(); // undefined in strict mode

// Solution: use .call or .apply to call the function with a specific this value

// THE CODE BELOWS IS AN EXAMPLE OF THE ARROW FUNCTION AND HOW IT DOES NOT HAVE ITS OWN THIS BUT IT TAKES THE THIS VALUE FROM THE PARENT SCOPE
// greet: function() {
//     const self = this;
//     const arrowGreet = () => console.log(`Hey, my name is ${self.firstName}`);
//     arrowGreet();
// },

// var firstName = 'Jonas'; // global scope

// const jonas = { 
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         // console.log(this); // refers to the jonas object
//         console.log(2037 - this.year);

//         const self = this; // self is a reference to the jonas object
//         const isMillenial = () =>{
//             console.log(this) // undefined
//             console.log(self.year >= 1981 && self.year <= 1996); // this refers to the jonas object
//         };
//         isMillenial();
//     },

//     greet: () => {
//         console.log(`Hey, my name is ${self.firstName}`); // arrow function does not have its own this
//     } // this refers to the global objextsdsd
    
// };

// jonas.greet(); // Hey, my name is undefined
// jonas.calcAge(); // 46    

// // arguements keyword

// const addExpr = function(a, b) { // function expression is NOT hoisted
//     console.log(arguments); // arguments is available in regular functions
//     return a + b;
// };

// addExpr(2, 5); // [2, 5]
// addExpr(2, 5, 8); // [2, 5, 8]
// addExpr(2, 5, 8, 9, 10); // [2, 5, 8, 9, 10]

// var addArrow = (a, b) => { 
//     console.log(arguments); // arguments is NOT available in arrow functions
//     return a + b;
// }
// console.log(addExpr(2,5)); // ReferenceError: arguments is not defined
// addArrow(2, 5); // ReferenceError: arguments is not defined


// Primitives vs Objects

let age = 30; // primitive
let oldAge = age; // primitive copy
age = 31; // age is now 31, oldAge is still 30
console.log(oldAge); // 30
console.log(age); // 31
// Reference types
const me = {
    name: 'Jonas',
    age: 30,
}; // object
const friend = me; // reference copy
friend.age = 27; // changing the age of friend also changes the age of me
console.log('Friend:', friend); // 27
console.log('Me:', me); // 27
// Primitive vs Reference types
let lastName = 'Williams'; // primitive
let oldLastName = lastName; // primitive copy
lastName = 'Davis'; // lastName is now 'Davis', oldLastName is still 'Williams'
console.log(oldLastName); // Williams
console.log(lastName); // Davis
// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}; // object
const marriedJessica = jessica; // reference copy
marriedJessica.lastName = 'Davis'; // changing the lastName of marriedJessica also changes the lastName of jessica
console.log('Before marriage:', jessica); // Davis
console.log('After marriage:', marriedJessica); // Davis
// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}; // object
const jessicaCopy = Object.assign({}, jessica2); // shallow copy
jessicaCopy.lastName = 'Davis'; // changing the lastName of jessicaCopy does not change the lastName of jessica2
console.log('Before marriage:', jessica2); // Williams
console.log('After marriage:', jessicaCopy); // Davis
// Spread operator
const jessica3 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}; // object
const jessicaSpread = { ...jessica3 }; // shallow copy
jessicaSpread.lastName = 'Davis'; // changing the lastName of jessicaSpread does not change the lastName of jessica3
console.log('Before marriage:', jessica3); // Williams
console.log('After marriage:', jessicaSpread); // Davis
// The Rest Pattern and Parameters
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};
console.log(add(2, 3)); // 5
console.log(add(2, 3, 4, 5)); // 14
console.log(add(2, 3, 4, 5, 6, 7, 8)); // 35
// The Spread Operator
const family = ['Jonas', 'Martha', 'Adam'];
const newFamily = [...family, 'Mary']; // ['Jonas', 'Martha', 'Adam', 'Mary']
console.log(newFamily); // ['Jonas', 'Martha', 'Adam', 'Mary']
const newFamily2 = ['Mary', ...family]; // ['Mary', 'Jonas', 'Martha', 'Adam']
console.log(newFamily2); // ['Mary', 'Jonas', 'Martha', 'Adam']
const newFamily3 = [...family]; // ['Jonas', 'Martha', 'Adam']
console.log(newFamily3); // ['Jonas', 'Martha', 'Adam']
const newFamily4 = [...family, 'Mary', 'John']; // ['Jonas', 'Martha', 'Adam', 'Mary', 'John']
console.log(newFamily4); // ['Jonas', 'Martha', 'Adam', 'Mary', 'John']
const newFamily5 = ['Mary', ...family, 'John']; // ['Mary', 'Jonas', 'Martha', 'Adam', 'John']
console.log(newFamily5); // ['Mary', 'Jonas', 'Martha', 'Adam', 'John']
const newFamily6 = [...family, ...newFamily]; // ['Jonas', 'Martha', 'Adam', 'Mary', 'Jonas', 'Martha', 'Adam']
console.log(newFamily6); // ['Jonas', 'Martha', 'Adam', 'Mary', 'Jonas', 'Martha', 'Adam']
const newFamily7 = [...newFamily, ...family]; // ['Jonas', 'Martha', 'Adam', 'Mary', 'Jonas', 'Martha', 'Adam']
console.log(newFamily7); // ['Jonas', 'Martha', 'Adam', 'Mary', 'Jonas', 'Martha', 'Adam']
const newFamily8 = [...newFamily, 'John']; // ['Jonas', 'Martha', 'Adam', 'Mary', 'John']
console.log(newFamily8); // ['Jonas', 'Martha', 'Adam', 'Mary', 'John']
const newFamily9 = ['John', ...newFamily]; // ['John', 'Jonas', 'Martha', 'Adam', 'Mary']
console.log(newFamily9); // ['John', 'Jonas', 'Martha', 'Adam', 'Mary']
const newFamily10 = [...newFamily, 'John', 'Mary']; // ['Jonas', 'Martha', 'Adam', 'Mary', 'John', 'Mary']
console.log(newFamily10); // ['Jonas', 'Martha', 'Adam', 'Mary', 'John', 'Mary']

// The forEach method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number); // 1 2 3 4 5
});
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((number, index) => {
    console.log(`Index: ${index}, Number: ${number}`); // Index: 0, Number: 1 ...
});
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach((number, index, array) => {
    console.log(`Index: ${index}, Number: ${number}, Array: ${array}`); // Index: 0, Number: 1, Array: 1,2,3,4,5 ...
});
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach((number) => {
    console.log(number * 2); // 2 4 6 8 10
});
const numbers5 = [1, 2, 3, 4, 5];
const doubledNumbers = [];
numbers5.forEach((number) => {
    doubledNumbers.push(number * 2);
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
const numbers6 = [1, 2, 3, 4, 5];
const doubledNumbers2 = numbers6.map((number) => number * 2);
console.log(doubledNumbers2); // [2, 4, 6, 8, 10]
const numbers7 = [1, 2, 3, 4, 5];
const doubledNumbers3 = numbers7.map((number) => {
    return number * 2;
});
console.log(doubledNumbers3); // [2, 4, 6, 8, 10]
const numbers8 = [1, 2, 3, 4, 5];
const doubledNumbers4 = numbers8.map((number, index) => {
    return `Index: ${index}, Number: ${number * 2}`;
});
console.log(doubledNumbers4); // ['Index: 0, Number: 2', 'Index: 1, Number: 4', ...]
const numbers9 = [1, 2, 3, 4, 5];
const doubledNumbers5 = numbers9.map((number) => number * 2);
console.log(doubledNumbers5); // [2, 4, 6, 8, 10]
const numbers10 = [1, 2, 3, 4, 5];
const doubledNumbers6 = numbers10.map((number) => number * 2);
console.log(doubledNumbers6); // [2, 4, 6, 8, 10]
const numbers11 = [1, 2, 3, 4, 5];
const doubledNumbers7 = numbers11.map((number) => number * 2);
console.log(doubledNumbers7); // [2, 4, 6, 8, 10]


// The filter method
const numbers12 = [1, 2, 3, 4, 5];