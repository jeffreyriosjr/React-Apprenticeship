 let movies = [
    {
        title: 'Interstellar',
        year: '2014',
        genre: 'science fiction',
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        imdbRating: '8.6',
    },
    {
        title: 'Padmaavat',
        year: '2018',
        genre: 'drama, history, romance',
        description: "Set in medieval Rajasthan, Queen Padmavati is married to a noble king and they live in a prosperous fortress with their subjects until an ambitious Sultan hears of Padmavati's beauty and forms an obsessive love for the Queen of Mewar.",
        imdbRating: '7',
    },
    {
        title: 'Beauty and the Beast',
        year: '1991',
        genre: 'animation, family, fantasy',
        description: "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love.",
        imdbRating: '8',
    },
    {
        title: 'Casablanca',
        year: '1942',
        genre: 'drama, war, romance',
        description: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
        imdbRating: '8.5',
    },
    {
        title: 'Wall-E',
        year: '2008',
        genre: 'animation, adventure, family',
        description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind",
        imdbRating: '8.4',
    }
];
  

    const alertMovieDetails = movieTitle => (
     foundMovie = movies.find(movie => {
        return movie.title === movieTitle;
    });

    if (foundMovie){
        alert(`${foundMovie.title}: ${movie.description}`);
    }
);
  // Loop and find an instance by a parameter//


  const titleDetails = () => {

        const movieTitle = prompt("Which movie do you want info for?");
    
        let foundMovie = JSON.stringify(movies.find(movie => movie.name === movieTitle));
        
        if (foundMovie) alert(foundMovie);
        else alert(`Could not find ${movieTitle}`);
    };

//Excercise Assignments

let id = 5;

const addMovie = (title, description, year, genre, imdbRating) => {
    movies.push(movie = {id, title, description, year, genre, imdbRating});
    id += 1;
}

addMovie('Vanilla Sky','A rich bachelor loses all his fam and fortune from an accident and suddenly changes his whole life for better from it', 2001, ['Romance', 'Science Fiction'], 8.3);


console.log(movies);


