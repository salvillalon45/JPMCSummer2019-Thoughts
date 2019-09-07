import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Footer } from "../Footer/Footer.js";
import { NavBar } from "../Header/NavBar.js";
import { Jumbotron } from "../Header/Jumbotron.js";
import { Intro } from "../Intro/Intro.js";
import { TheProject } from "../TheProject/TheProject.js";
import { Challenges } from "../ChallengesFromProject/Challenges.js";
import { Part1 } from "../LessonsLearned/part1.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Jumbotron />
          <Intro />
          <TheProject />
          <Challenges />
          <Part1 />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
