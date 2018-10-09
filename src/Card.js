import React from 'react';

const Card = ({ name, height, mass, hair_color, skin_color, eye_color, birt_year, gender, homeworld }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2>{name}</h2>
			<p>Height(cm): {height}</p>
			<p>Mass(kg): {mass}</p>
			<p>Hair color: {hair_color}</p>
			<p>Skin color: {skin_color}</p>
			<p>Eye color: {eye_color}</p>
			<p>Birth year: {birt_year}</p>
			<p>Gender: {gender}</p>
			<p>Homeworld: {homeworld}</p>

		</div>
	)
}

export default Card;