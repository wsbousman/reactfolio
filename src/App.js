import React, { Component } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import Push from './components/Push';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {

  conditional = {value: true}

  render() {

    return (
      
    <div className="bg">
      <Router>
      {/*conditional rendering via ternary operator*/}
      {this.conditional.value ? <Header /> : null}
      <Nav />
      {/*declarative component routing*/}
      <Routes>
        <Route exact path ="/About" element={<About></About>}/>
        <Route exact path="/Project" element={<Project></Project>}/>
        <Route exact path="/" element={<Push></Push>}/>
        <Route exact path="/reactfolio" element={<Push></Push>}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  )}
}

export default App;