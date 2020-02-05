import React from 'react';
import './style.css';
import Col from '../Col';
import Row from '../Row';
import Alert from '../Alert';
import Score from '../Score';

function Navbar(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-success'>
			<Col size='md-4'>
				<a className='navbar-brand' href='/'>
					Clicky Game
				</a>
			</Col>
			<Col size='md-4'>
				<Alert message={props.state.alertMessage} />
			</Col>
			<Col size='md-4'>
				<Score
					score={props.state.pickedChars.length}
					topScore={props.state.topScore}
				/>
			</Col>
		</nav>
	);
}

export default Navbar;
