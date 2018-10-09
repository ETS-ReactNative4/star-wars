import React from 'react';

const SearchBox = ({searchField, searchSent}) => {
	return (
		<div>
		<input 
			className='pa3 ba b--green bg-lightest-blue'
			type="search" 
			placeholder="Search"/>
			
		</div>
	);
};

export default SearchBox;