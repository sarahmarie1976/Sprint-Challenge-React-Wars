import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';


 //https://rickandmortyapi.com/api/character  use for axios get request

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const App = () => {
		const [data, setData] = useState([]);
		const [searchTerm, setSearchTerm] = useState('');
		const handleChange = (e) => {
			setSearchTerm(e.target.value);
			console.log(searchTerm);
		};

		useEffect(() => {
			axios.get('https://rickandmortyapi.com/api/character').then(
				(response) => {
					// console.log(response.data.results)
					setData(response.data.results);
					// data = response.data.results
					const initialArray = response.data.results;
					const filteredData = initialArray.filter((character) => {
						return character.name
							.toLowerCase()
							.includes(searchTerm.toLowerCase());
					});
					setData(filteredData);
				},
				[searchTerm]
			);
		});

		return (
			<div className="App">
				<h1 className="Header">Characters</h1>
				<label>Search for a Character here:</label>
				<input
					type="text"
					name="search"
					value={searchTerm}
					onChange={handleChange}
				/>
				<Character characterArray={data} />
			</div>
		);
	};

	export default App;