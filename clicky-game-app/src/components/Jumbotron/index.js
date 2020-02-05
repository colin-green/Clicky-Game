import React from 'react';
import './style.css';
import Col from '../Col';
import Row from '../Row';

function Jumbotron() {
	return (
		<div className='jumbotron jumbotron-fluid'>
			<div className='container'>
				<h1 className='display-4'>Clicky Game!</h1>
				<p className='lead'>
					Click on an character that you haven't clicked on already to earn
					points!
				</p>
			</div>
		</div>
	);
}

export default Jumbotron;
