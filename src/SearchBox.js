import React from 'react';

const SearchBox = ({searchfield, searchSent, searchChange, category}) => {
	if (category.length !== 0) {
		return (
			<div className='tc'>
				<input 
					className='pa3 ba b--green bg-lightest-blue'
					type="search" 
					placeholder="Enter search"
					onChange={searchChange}
					onKeyPress={searchChange}
					/>
				<button 
					className='f6 link dim ph3 pv2 mb2 dib black bg-dark-grey'
					onClick={searchSent} >
					Search
				</button>
			</div>
		);
	} else {
		return <div className='tc'>
			<p>Choose a category</p>
		</div>
	}

};

export default SearchBox;