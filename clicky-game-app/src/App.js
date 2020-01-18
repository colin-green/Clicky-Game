import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Card from './components/Card';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/Falco.png" />
        <Card source="./images/Marth.png" />
        <Card source="./images/Sheik.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
        <Card source="./images/SSBM_Fox_HQ.jpg" />
      </Wrapper>
      <Footer />
    </div>
  ) 
}

export default App;
