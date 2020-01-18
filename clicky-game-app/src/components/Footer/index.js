import React from "react";
import "./style.css";
import Col from "../Col";
import Row from "../Row";
import Container from "../Container";

function Footer() {
    return (
        <footer className="footer">
            <span style={{marginLeft: 20, fontSize: 20}}>Clicky Game!
            <img src="./logo512.png" alt="Test" height="30" />
            </span>
        </footer>
    )
}

export default Footer;