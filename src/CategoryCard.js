import React from 'react';

const CategoryCard = ({categorySelect}) => {
	return (
		<div className='tc'>
			<button className='f3 link dim ph3 pv2 mb2 dib white bg-near-black' id="https://swapi.co/api/people/" onClick={categorySelect}>People</button>
			<button className='f3 link dim ph3 pv2 mb2 dib white bg-near-black' id="https://swapi.co/api/films/" onClick={categorySelect}>Movies</button>
			<button className='f3 link dim ph3 pv2 mb2 dib white bg-near-black' id="https://swapi.co/api/planets/" onClick={categorySelect}>Planets</button>
			<button className='f3 link dim ph3 pv2 mb2 dib white bg-near-black' id="https://swapi.co/api/starships/" onClick={categorySelect}>Starships</button>
			<button className='f3 link dim ph3 pv2 mb2 dib white bg-near-black' id="https://swapi.co/api/vehicles/" onClick={categorySelect}>Vehicles</button>
			<button className='f3 link dim ph3 pv2 mb2 dib white bg-near-black' id="https://swapi.co/api/species/" onClick={categorySelect}>Species</button>

		</div>
	);
};

export default CategoryCard;