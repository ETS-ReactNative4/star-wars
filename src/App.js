import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { persons } from './persons';


class App extends Component {
	constructor() {
		super()
		this.state = {
			persons: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		// this.setState({ persons: persons })
		fetch('https://swapi.co/api/people/')
		.then(response => response.json())
		.then(users => {
			this.setState({ persons: users.results })
		})
	}

	onSearchSent = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		if (this.state.persons.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
			    <div>
			      <h1>Star Wars</h1>
			      <SearchBox searchSent={this.onSearchSent}/>
			      <CardList persons={this.state.persons}/>
			    </div>
	  		);
		}

	}

}

export default App;
