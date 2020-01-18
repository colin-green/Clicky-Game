import React from "react";
import "./style.css";
import Col from "../Col"
import Row from "../Row";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Col size='md-4'><a className="navbar-brand" href="/">Clicky Game</a></Col>
            <Col size='md-4'><span className="navbar-brand">Click an image to begin!</span></Col>
            <Col size='md-4'><span className="navbar-brand">Score: 0 | Top Score: 0</span></Col>
        </nav>
    )
}

export default Navbar;