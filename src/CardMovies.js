import React from 'react';

const CardMovies = ({title, episode_id, release_date, director,}) => {
    return (
		<div className='tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{title}</h2>
            <p>Episode number: {episode_id}</p>
            <p>Director: {director}</p>
            <p>Release date: {release_date}</p>
        </div>
    );
}

export default CardMovies;