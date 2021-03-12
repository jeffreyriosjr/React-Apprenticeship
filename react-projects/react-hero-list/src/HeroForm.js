import { useState } from 'react';

const HeroFormComponent = ({ addNewHero }) => {
  // initialize my variable and state hooks first
  const [heroName, setHeroName] = useState('Jeff');
  const [heroPower, setHeroPower] = useState('Smartness')
  const [heroUniverse, setHeroUniverse] = useState('')
  const [heroCoolnessRating, setHeroCoolnessRating] = useState(5)
  //let heroName ='';
  //   let heroName = ''
  //   const setHeroName = (value) => {
  //     //   updates heroName
  //     heroName += value;
  //   }

  // initialize my functions
  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(`Our Hero is: ${heroName} and his/her power is: ${heroPower}`);
    let newHero = {
      name: heroName,
      power: heroPower,
      universe: heroUniverse,
      coolnessRating: heroCoolnessRating,
    };
    console.log(newHero);
    addNewHero(newHero);
    clearForm();

  };
  return (
    <div className='row mb-5'>
      <div className='col-6 offset-3'>
        <form action='submit' id='hero-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='heroName'>Hero Name</label>
            <input
              type='text'
              id='heroName'
              className='form-control'
              value={heroName}
              onChange={event => {
                setHeroName(event.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='heroPower'>Hero Power</label>
            <input
              type='text'
              className='form-control'
              id='heroPower'
              value={heroPower}
              onChange={event => {
                setHeroPower(event.target.value);
              }}
            />
          </div>
          <div className='row'>
            <div className='form-group col'>
              <label htmlFor='heroUniverse'>Hero Universe</label>
              <input
                type='text'
                id='heroUniverse'
                className='form-control'
                value={heroUniverse}
                onChange= {event =>{
                  setHeroUniverse(event.target.value);
                }}
              />
            </div>
            <div className='form-group col'>
              <label htmlFor='heroCoolnessRating'>Coolness</label>
              <input
                type='text'
                className='form-control'
                id='heroCoolnessRating'
                value={heroCoolnessRating}
                onChange= {event => {
                  setHeroCoolnessRating(event.target.value);
                }}
              />
            </div>
          </div>
          <button className='btn btn-primary btn-block'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default HeroFormComponent;
