import React from 'react';
import Card from './Card';

const CardList = ({ persons }) => {
	return (
		<div>
			{
				persons.map((value, i) => {
						return (<Card 
						key={i} 
						name={persons[i].name} 
						height={persons[i].height} 
						mass={persons[i].mass}
						hair_color={persons[i].hair_color}
						skin_color={persons[i].skin_color}
						eye_color={persons[i].eye_color}
						birth_year={persons[i].birth_year}
						gender={persons[i].gender}
						homeworld={persons[i].homeworld}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;

			// <Card name={persons[0].name} age={persons[0].age} gender={persons[0].gender}/>
			// <Card name={persons[1].name} age={persons[1].age} gender={persons[1].gender}/>