import React from 'react';

const CardStarships = ({name, model, manufacturer, cost, length, speed, crew, cargo, hyperdriverating}) => {
	return (
		<div className='w5 tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2>{name}</h2>
			<p>Model: {model}</p>
			<p>Manufacturer: {manufacturer}</p>
			<p>Cost (credits): {cost}</p>
			<p>Length: {length}</p>
			<p>Speed: {speed}</p>
			<p>crew: {crew}</p>
			<p>Cargo: {cargo}</p>
			<p>Hyper drive rating: {hyperdriverating}</p>
		</div>
	)
}

export default CardStarships;