import React from 'react';
import './style.css';

function Alert(props) {
	if (props.message) {
		return <span className='navbar-brand'>{props.message}</span>;
	} else {
		return <span className='navbar-brand'>Click an image to begin!</span>;
	}
}

export default Alert;
