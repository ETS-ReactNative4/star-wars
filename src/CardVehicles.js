import React from 'react';

const CardVehicles = ({name, cost_in_credits, crew, length, manufacturer, max_atmosphering_speed}) => {
    return (
		<div className='w5 tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost (credits): {cost_in_credits}</p>
            <p>Crew: {crew}</p>
            <p>Length: {length}</p>
            <p>Max speed: {max_atmosphering_speed}</p>
        </div>
    );
};

export default CardVehicles;