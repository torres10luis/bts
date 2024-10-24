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

const jonas = { 
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        // console.log(this); // refers to the jonas object
        console.log(2037 - this.year);

        const self = this; // self is a reference to the jonas object
        const isMillenial = () =>{
            console.log(this) // undefined
            console.log(self.year >= 1981 && self.year <= 1996); // this refers to the jonas object
        };
        isMillenial();
    },

    greet: () => {
        console.log(`Hey, my name is ${self.firstName}`); // arrow function does not have its own this
    } // this refers to the global objextsdsd
    
};

jonas.greet(); // Hey, my name is undefined
jonas.calcAge(); // 46    

// arguements keyword

const addExpr = function(a, b) { // function expression is NOT hoisted
    console.log(arguments); // arguments is available in regular functions
    return a + b;
};

addExpr(2, 5); // [2, 5]

const addArrow = (a, b) => { 
    console.log(arguments); // arguments is NOT available in arrow functions
    return a + b;
}