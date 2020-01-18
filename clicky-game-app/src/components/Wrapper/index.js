import React from "react";
import "./style.css";
import Col from "../Col";
import Row from "../Row";
import Container from "../Container";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>
}

export default Wrapper;