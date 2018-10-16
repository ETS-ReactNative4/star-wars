import React from 'react';

const CardSpecies = ({name, average_height, average_lifespan, classification, language,}) => {
    return (
		<div className='w5 tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <p>Average height (cm): {average_height}</p>
            <p>Average lifespan (year): {average_lifespan}</p>
            <p>Classification: {classification}</p>
            <p>Language: {language}</p>
        </div>
    );
};

export default CardSpecies;