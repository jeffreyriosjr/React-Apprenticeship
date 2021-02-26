/*****Objects JS********/

let firstObject = new Object ();
console.log(firstObject);
let person = {
    name: 'Jeffrey',
    hobby: 'Music',
    age: 35,
    isAwesome: true,
    favoriteFruits: ['mangoes', 'oranges', 'strawberries'], 'likes running': 'no not really',
    pet: {
        type: 'cat',
        name: 'mittens',
        age: 2,
    },

};
console.log(person.hobby);
console.log(person['name']);
console.log(person['likes running']);
console.log(person.pet.name);
delete person.hobby;
console.log('personnnnnn', person);

console.log('name' in person);

for (let key in person) {
    console.log('the key name is:', key);
    console.log('this key value is:', person[key]);

}
let alertArray = ['first val', 'second val', 'third val'];
alert(person.name + ' ' + person.age);

// Arrays and Objects

let animals = [
    {
    type: 'cat',
    name: 'Mr. Bojangles',
    isEvil: true,
    },
    {
        type: 'dog',
        name: 'Bob',
        isEvil: false,
    },
    {
        type: 'bird',
        name: 'Doug',
        isEvil: true,   
     },
    ];


    // create a for loop that iterates through the animals array
    // and console logs each animal name:

 /*   for (let i = 0; i < animals.length; i++){
        console.log(animals[i].name);
    }
   */ 


   // Higher Order Array Methods
   // ForEACH:

animals.forEach(function (animal){
    console.log("my animal name", animal.name);
});

// arr.map()
let animalTypes = animals.map(animal => {
    console.log('inside the map func', animal);
    return animal.type;
});
console.log('Animal Types:', animalTypes);

// arr.filter:
let evilAnimals = animals.filter(animal =>{
    // check if isEvil property is true
    //if it is, return that animal
    return animal.isEvil === true;

});

//console.log('these are my evil animals', evilAnimals);

let evilAnimalNames = animals.filter(animal => {
    return animal.isEvil === true;
}) .map((evilAnimal) => {
    return evilAnimal.name;
});

console.log('these are my evil animal names: ', evilAnimals);


