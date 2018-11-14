import React from 'react';
import Card from './Card';
import CardStarships from './CardStarships';
import CardPlanets from './CardPlanets';
import CardMovies from './CardMovies';
import CardVehicles from './CardVehicles';
import CardSpecies from './CardSpecies';

const CardList = ({ starwars, category }) => {
	if (starwars.length !== 0) {
		console.log('kategori: ' + category);
		switch (category) {
			case 'https://swapi.co/api/people/':
				return (
					<div>
						{
							starwars.map((value, i) => {
								return (<Card 
								key={i} 
								name={starwars[i].name} 
								height={starwars[i].height} 
								mass={starwars[i].mass}
								hair_color={starwars[i].hair_color}
								skin_color={starwars[i].skin_color}
								eye_color={starwars[i].eye_color}
								birth_year={starwars[i].birth_year}
								gender={starwars[i].gender}
								/>
								);
							})
						}
					</div>
				);
			case 'https://swapi.co/api/planets/':
				return (
					<div>
						{
							starwars.map((value, i) => {
								return (<CardPlanets 
								key={i} 
								name={starwars[i].name} 
								climate={starwars[i].climate} 
								diameter={starwars[i].diameter} 
								gravity={starwars[i].gravity} 
								orbital_period={starwars[i].orbital_period} 
								population={starwars[i].population} 
								/>
								);
							})
						}
					</div>
				);
			case 'https://swapi.co/api/films/':
				return (
					<div>
						{
							starwars.map((value, i) => {
								return (<CardMovies 
								key={i} 
								title={starwars[i].title} 
								episode_id={starwars[i].episode_id} 
								director={starwars[i].director} 						
								release_date={starwars[i].release_date} 
								/>
								);
							})
						}
					</div>
				);
			case 'https://swapi.co/api/vehicles/':
				return (
					<div>
						{
							starwars.map((value, i) => {
								return (<CardVehicles 
								key={i} 
								name={starwars[i].name}
								manufacturer={starwars[i].manufacturer}
								cost_in_credits={starwars[i].cost_in_credits} 
								crew={starwars[i].crew} 						
								length={starwars[i].length} 
								max_atmosphering_speed={starwars[i].max_atmosphering_speed}
								/>
								);
							})
						}
					</div>
				);
			case "https://swapi.co/api/starships/":
				return (
					<div>
						{
							starwars.map((value, i) => {
								return (<CardStarships 
								key={i} 
								name={starwars[i].name} 
								model={starwars[i].model} 
								manufacturer={starwars[i].manufacturer}
								cost={starwars[i].cost_in_credits}
								length={starwars[i].length}
								speed={starwars[i].max_atmosphering_speed}
								crew={starwars[i].crew}
								cargo={starwars[i].cargo_capacity}
								hyperdriverating={starwars[i].hyperdrive_rating}
								/>
								);
							})
						}
					</div>
				);
			case "https://swapi.co/api/species/":
				return (
					<div>
						{
							starwars.map((value, i) => {
								return (<CardSpecies 
								key={i} 
								name={starwars[i].name} 
								average_height={starwars[i].average_height} 
								average_lifespan={starwars[i].average_lifespan}
								classification={starwars[i].classification}
								language={starwars[i].language}
								speed={starwars[i].max_atmosphering_speed}
								crew={starwars[i].crew}
								cargo={starwars[i].cargo_capacity}
								hyperdriverating={starwars[i].hyperdrive_rating}
								/>
								);
							})
						}
					</div>
				);
			default:
				return (
					<div>
						{
							<p>No Category has been chosen</p>
						}
					</div>
				);				
		}
	} else {
		return (
			<div className='tc'>
				<p>No matching results</p>
			</div>
		);
	}	
}

export default CardList;

