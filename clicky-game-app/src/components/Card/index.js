import React from 'react';
import './style.css';
import Col from '../Col';
import Row from '../Row';
import Container from '../Container';

function Card(props) {
	return (
		<div
			className='card'
			key={props.id}
			data-id={props.id}
			name={props.name}
			onClick={props.onClick}
			style={{ backgroundImage: `url(${props.image})` }}
		></div>
	);
}

export default Card;
