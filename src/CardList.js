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
						age={persons[i].age} 
						gender={persons[i].gender}
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