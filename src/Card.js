import React from 'react';

const Card = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, }) => {
	return (
		<div className=' w5 tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2>{name}</h2>
			<p>Height(cm): {height}</p>
			<p>Mass(kg): {mass}</p>
			<p>Hair color: {hair_color}</p>
			<p>Skin color: {skin_color}</p>
			<p>Eye color: {eye_color}</p>
			<p>Birth year: {birth_year}</p>
			<p>Gender: {gender}</p>
		</div>
	)
}

export default Card;