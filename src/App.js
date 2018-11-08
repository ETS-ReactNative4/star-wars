import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import CategoryCard from './components/CategoryCard';
import NextPrevious from './components/NextPrevious';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			starwars: [],
			searchfield: '',
			category: '',
			nexprev: {},
		}
	}

	//Fetch data from Sw Api
	fetchApi = (event) => {
		fetch(event)
		.then(response => response.json())
		.then(users => {
			this.setState({ starwars: users.results })
			this.setState({ nexprev: users })
		});
	}

	//Update state when writing in searchbox
	onSearchChange = (event) => {
		console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
		if (event.key === 'Enter') {
			this.onSearchSent();
		}
	}

	//Update state when search is sent via ENTER or button click
	onSearchSent = (event) => {
		console.log('knappen klickad');
		console.log(this.state.searchfield);
			const search = this.state.category + '?search=' + this.state.searchfield;
		this.fetchApi(search);
	}

	//Update state to new category
	onCategorySelect = (event) => {
		this.setState({ category: event.target.id });
		console.log(event.target.id);
		this.fetchApi(event.target.id);
	}

	//update state with next or previous results
	onNextButton = (event) => {
		if (event.target.id === "next") {
			this.fetchApi(this.state.nexprev.next);
		} else if (event.target.id === "previous") {
			this.fetchApi(this.state.nexprev.previous);			
		}

	}

	render() {
		return (
			<div className="tc">
				<h1>Star Wars</h1>
				<SearchBox searchSent={this.onSearchSent} searchChange={this.onSearchChange} category={this.state.category}/>
				<CategoryCard categorySelect={this.onCategorySelect}/>
				<CardList starwars={this.state.starwars} category={this.state.category}/>
				<NextPrevious nexprev={this.state.nexprev} nextButton={this.onNextButton}/>
			</div>
		);
	}

	// }

}

export default App;
