import React from 'react';
import './style.css';

function Score(props) {
	return (
		<span className='navbar-brand'>
			Score: {props.score} | Top Score: {props.topScore}
		</span>
	);
}

export default Score;
