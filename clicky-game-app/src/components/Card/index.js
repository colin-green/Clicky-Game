import React from "react";
import "./style.css";
import Col from "../Col";
import Row from "../Row";
import Container from "../Container";

function Card(props) {
    return (
        <div className="card" style={{width: 200}}>
            <img className="card-img-top" src={props.source} alt="Card image cap" />
        </div>
    )
}

export default Card;