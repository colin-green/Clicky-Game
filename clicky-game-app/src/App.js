import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import characters from './characters.json';

class App extends Component {
	state = {
		characters: characters,
		pickedChars: [],
		topScore: 0,
		alertMessage: ''
	};

	shuffleCards = () => {
		this.setState(
			(this.state.characters = this.shuffleArray(this.state.characters))
		);
	};

	shuffleArray = arr => {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};

	onClick = event => {
		const name = event.target.attributes.getNamedItem('name').value;
		this.shuffleCards();
		this.checkGuess(name, this.updateTopScore);
	};

	checkGuess = (name, cb) => {
		const newState = { ...this.state };
		if (newState.pickedChars.includes(name)) {
			newState.alertMessage = `You already picked ${name} :( Try again!`;
			newState.pickedChars = [];
			this.setState((this.state = newState));
		} else {
			newState.pickedChars.push(name);
			newState.alertMessage = 'Nice! :)';
			this.setState((this.state = newState));
		}
		cb(newState, this.checkWin);
	};

	updateTopScore = (newState, cb) => {
		if (newState.pickedChars.length > newState.topScore) {
			newState.topScore++;
			this.setState((this.state = newState));
		}
		cb(newState);
	};

	checkWin = newState => {
		if (newState.pickedChars.length === 12) {
			newState.alertMessage = 'You won!!! Great job! :D';
			newState.pickedChars = [];
			this.setState((this.state = newState));
		}
	};

	// render() {
	// 	return (
	// 		<div>
	// 			<Navbar state={this.state} />
	// 			<Jumbotron />
	// 			<Wrapper>
	// 				{this.state.characters.map(char => (
	// 					<Card
	// 						id={char.id}
	// 						name={char.name}
	// 						image={char.image}
	// 						key={char.id}
	// 						onClick={this.onClick}
	// 					/>
	// 				))}
	// 			</Wrapper>
	// 			<Footer />
	// 		</div>
	// 	);
	// }

	render() {
		return (
			<div>
				<Navbar state={this.state} />
				<Jumbotron />
				<Container>
					<Row>
						{this.state.characters.map(char => (
							<Card
								id={char.id}
								name={char.name}
								image={char.image}
								key={char.id}
								onClick={this.onClick}
							/>
						))}
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
