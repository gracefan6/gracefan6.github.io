import React, { Component } from 'react';
import NavBar from "./components/NavBar.js";
import Project from "./components/Project.js";
import About from "./components/About.js";
import './App.css'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        {/* <About />
        <Project /> */}
      </div>
    );
  }
}

export default App;
