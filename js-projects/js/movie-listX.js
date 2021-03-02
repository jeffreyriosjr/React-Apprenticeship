let movies = [
    { title: 'Vanilla Sky', year: 2001, genre: 'Drama', description: 'Rich bachelor changes life through accident', imdb: 6.9 },
    { title: 'The Fifth Element', year: 1997, genre: 'Science Fiction', description: 'Agent saving the world from apocalypse', imdb: 7.7 },
    { title: 'Inception', year: 2010, genre: 'Science Fiction', description: 'Tapping into dreams to control people', imdb: 8.8 },
    { title: 'Toy Story', year: 1995, genre: 'Family', description: 'Toys becoming real to survive.', imdb: 7.8 },
    { title: 'Pursuit of Happiness', year: 2006, genre: 'Drama', description: 'True Story of Single father living from poor to rich', imdb: 8 },
   
   
  ];

  const movieDetails = () => {
      movies.forEach(movies => {
          console.log(` my movie title is ${movies.title} and it came out in ${movies.year}`);
          
      });

  }; 

  movieDetails();
  
  // Loop and find an instance by a parameter
  const titleDetails = (movieTitle) => {
     let foundMovie = movies.find(movie => {
         return movie.title === movieTitle;
     });
     if (foundMovie) console.log(foundMovie);
     else console.log(`Could not find ${movieTitle}`);
    };

  titleDetails('Inception');
  titleDetails('Vanilla Sky');
  titleDetails('Toy Story');

  //movieDetails();

  


/*items.forEach((item) => {
    console.log("The total for this item is: $" + item.price);

})
 items.forEach((item) => {
    console.log(`The backtic total for the ${item.name} is: ${item.price}`);
 })
*/



/*const getTotalPrice = function(arr, val) {
    
};

// arr.map()
const itemNames = items.map(item => {
    return item.name;
});
console.log(itemNames);

const itemNames2 = item.map(item => item.name);
console.log(itemNames);


// arr.filter:
const cheapItems = items.filter(item => {
    return item.price < 100;
});

console.log(cheapItems);

// Find Method
const foundItem= items.find(item => {
    return item.name === 'Macbook Pro';
});
console.log(founditem);

// Chaining Methods
const expensiveItems = items.filter(item => {
    return item.price > 100;
}).map(expensiveItem => {
    return expensiveItem.name;
});

const expensiveItems2 = items.filter(item => item.price > 100).map(ex => {
    return ex.price && ex.name;
});
console.log(expensiveItems);

*/
