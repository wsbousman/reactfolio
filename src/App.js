import React, { Component } from 'react';
import About from './components/About/Index.js';
import Nav from './components/Nav/Index.js';
import Project from './components/Project/Index.js';
import Header from './components/Header/Index.js';
import Footer from './components/Footer/Index.js';
import Push from './components/Push/Index.js';
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