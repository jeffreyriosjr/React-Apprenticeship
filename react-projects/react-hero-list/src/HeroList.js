const HeroListComponent = ({ heroes }) => {
    const showDetails = event => {
        event.preventDefault();
        console.log(event);

        let heroId = +event.target.value;
        //find a hero from our array
        let foundHero = heroes.find(hero => heroId);
        //alert details of that hero
        if(!foundHero) {
            alert('Sorry Could not find your hero!');
        }   else { 
                alert(`${foundHero.name}: has the power of ${foundHero.power}`);
            }
        };
    return (
    <div className='row'>
        <div className='col-6 offset-3'>
            <ul className='list-group'>
                {heroes.map((hero, index) => {
                        return  (
                        <li className='list-group-item' key={index}>
                            {/* <a 
                            href='javascript:void(0)'
                            value={hero.id}
                            onClick={showDetails}> */}
                            {hero.name}
                            
                            {/*</a> */}
                            <button
                                className='btn btn-outline-info'
                                value={hero.id}
                                onClick={showDetails}>
                                    Hero
                                </button>
                             </li>
                        );
                    })}
            </ul>
        </div>
    </div>
    );
};

export default HeroListComponent;