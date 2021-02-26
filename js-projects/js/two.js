/***
 * JS: Part Two
 *  - Operators
 *  - Co;ntrol Flow
 *  - Functions
 */
// Comparision Operators
let value1 = 35;
let value2 = 100;
let value3 = 500;

console.log('Does value 1 equal value 2?', value1 === value2); ///true

console.log('is value 1 greater than or equal to value 2?', value1 >= value2);

//Logical &&
//in order fo the result to be true, all conditions must be met with true 

console.log('Are my two conditions true or false?', value1 > value2 && value1 !== value2);

// Logical || || (OR)
console.log('Logical ||: Are my two conditions true or false?', value1 > value2 || value1 !== value2);

// Combining Logical || and Logical &&

console.log('Combining || &&: "What is the result ', (value1 > value2 || value1 !== value2) && value2 > value3
);

/***** Control Structures:  */

// IF/Else

let numberOne = 100;
let numberTwo =445;
let numberThree = 200;

// if(numberOne > numberTwo) {
//    alert('You are Correct!');
//} else {
//    alert('Sorry its not greater than :(');
// }

//If, Else if, Else
// when first condition is meet the code pulls out and returns
//if(numberOne < numberTwo && numberOne !== numberThree) {
//    alert('You are Boss!');
//} else if (numberTwo > numberOne) {
//    alert('Two for Two');
//} else  {
//    alert('You are still Boss!');
//}

// ====== Loops
// Count Up
//for (let i = 10; i < 101; i+= 10) {
    //Render the number 10
    
  //  console.log('THE NUMBER: ', i);

//}


//for (let i = 0; i <= 100; i++) {
//    if (i = 50) {
//        //End loop
//        console.log(i);
//        break;
//    }   else {
//        console.log(i);
//    }
//}
// create a loop that counts by 10 up 100



// Count Down
//for (let i = 20; i > 0; i--) {
//    console.log('my downward counter: ', i);
//}

//While Loop
//let i = 0;
//while (i < 10){
//    console.log(i);
//    i++;
//}

// Do While

//let j = 0;
//do {
//    console.log('this is j, ', j);
//    j++;
//} while (j < 10);

/****** Ternary ***** */

// [if condition = true] ? (run this  code ()) : (run this code())
// [condition] ? statement1 : statement2;

//let age = 25;

//age >= 21 ? alert('Have fun be safe!') : alert('Sorry too young!');

/*==== Switch Statements======= */

/*let animal = 'cow';

switch (animal) {
    case 'dog':
     alert('its a dog!');  // my code
     break;
     case 'cat' :
         alert('Its a cat!');
         break;
     case 'monkey':
        alert('its a monkey');
        break;
     default:
     alert('Doesnt match :/');

}
*///

/******FUNCTIONS********* */

function firstFunction() {
    console.log('This is my first function');
    return;
}
// First Functions
firstFunction();
let i = 0;
function countDown() {
    for(let i = 10; i >= 0; i--) {
        console.log('counting from inside my function!', 

        )
    }
}

// countDown();

// Arrow function expressions

const doMath = () => {
    let num1 = 20;
    let num2 = 25;

    console.log('My sum of nums:', num1 + num2);
};

// doMath();

const startMath = () => {
    let firstNum = 20;
    let secondNum =30;
    debugger
    sumNumbers(firstNum, secondNum);
};

const sumNumbers = (arg1, arg2) => {
    console.log('Sum of numbers: ', arg1 + arg2);
};

sumNumbers(100, 300);

