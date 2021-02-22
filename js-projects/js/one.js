

/** variable declaration */
// this is a single line comment.
// cmd + / || ctrl + /

// var myName ='Alex'
let hisNAme = 'Alejandro';
const newName= 'Al'; //the preference is using single quotes//

// Another example of variable initialization with 
// commas and semi-colons
let nameOne = 'alex',
nameTwo ='Anna',
nameThree = 'Liz';


// This is my console example
console.log(newName, 'My name is jeff');

// this is my alert example
//alert('hey, you are awesome!');

// Testing confirm
//confirm('Are you 18 or older?');

// prompt example
//prompt('Enter your age!');

//example of the values returned from popup methods
//console.log(alert("testing the alert value"));

/***** Arithmetic Operators ******/
let total = 1 + 5 + 100;
console.log('my value before increment is: ', total);
++total;
++total;
console.log('my total is ', total);

/**** Assignment Operators  ******/
let x = 'y';
let one = 1;
// += example
one += 6;
// one = one + 6;
console.log('what is one?', one);

/***** Sting Operators ******/
// AKA Concatenation
let firstString = 'First String';
let secondString = 'Second String';

// three strings
let smushed = firstString + ' ' + secondString;
console.log('what is smushed?', smushed);

//concatenat a string with a number?
let myString = 'this is a string';
let myNumber = 100;

let concatStringNumber = myString + myNumber;
console.log(concatStringNumber);

// concat number string with regular number
let numberString = '10';
let realNumber = 10;
console.log(numberString + realNumber);

/*** comparison operators *****/
let value1 = 100;
let value2 = '100';


// Best practices is to use strict ===
console.log('Are they equal? ', value1 == value2);   // true
console.log('Are they equal? ', value1 === value2);  // false

let value3 =20;
let value4 = 30;
console.log('is value3 greater than value4? ', value3 < value4); //true
console.log('is value3 greater than value4? ', value3 > value4); //false