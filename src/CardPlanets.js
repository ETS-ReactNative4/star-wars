import React from 'react';

const CardPlanets = ({name, climate, diameter, gravity, orbital_period, population,}) => {
    return (
		<div className='w5 tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <p>Climate: {climate}</p>
            <p>Diameter: {diameter}</p>
            <p>Gravity: {gravity}</p>
            <p>Orbital period: {orbital_period}</p>
            <p>Population: {population}</p>
        </div>
    );
}

export default CardPlanets;