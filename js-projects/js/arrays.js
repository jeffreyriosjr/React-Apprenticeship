/****** Arrays Notes ******/

///***** Strings Properties and Methods *****/
/*
let firstString = 'Hello Jeff';
firstString = 'Hello Universe';
let wordString = 'meow, ughh, yikes, dope'; 

console.log(firstString);
console.log(firstString.length);

console.log(firstString.indexOf('o'));
console.log(firstString.trim());
console.log(firstString.toUppercCase());
console.log(firstString.toLowerCase());
console.log(firstString.substring(0,5));
console.log(firstString.split(' , '));
console.log(wordString.toUpperCase().split(', '));

// Arrays ?

let firstArray = new Array(1, 2, 3, 4);
console.log('first array: ', firstArray);
let coolerArray = (10, 20, 30, 40);
console.log('cooler array: ', coolerArray);

let fruits = ['Apples', 'Oranges', 'Plums', 'Jackfruit'];
console.log('how many items in my fruits array?', fruits.length);
console.log(fruits);
console.log(fruits[1]);
console.log('I like ' + fruits[1] + ' and ' + fruits[2]);

fruits.push('Mangoes', 'Peaches');
console.log(fruits);

fruits.pop();
console.log(fruits);


fruits.unshift('Tacos');
console.log(fruits);
fruits.shift();
console.log('removing tacos', fruits);

console.log('how many items in my fruits array?', fruits.length);

let emptyArray = [];
console.log(emptyArray.length);
if (emptyArray.length !== 0) {
    console.log('No items in the empty array!');
}

fruits.push('Watermelons');

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/

// Create an array of your top 5 movies
// Create a loop that console.logs each of those movies
// use toUpperCase() to console.log all movies in Caps


let jeffMovies = ['Vanilla Sky', 'Pursuit of Happiness', 'Fifth Element', 'Toy Story', 'Inception'];
console.log('what are your top 5 movies?', jeffMovies.length);

for (let i = 0; i < jeffMovies.length; i++){
    console.log(jeffMovies[i]);

}
let jeffBritMovies = jeffMovies.concat(movies);
console.log(jeffBritMovies);

let mixedArray 

