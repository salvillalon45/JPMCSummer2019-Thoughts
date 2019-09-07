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
import { Part2 } from "../LessonsLearned/part2.js";
import { Part3 } from "../LessonsLearned/part3.js";
import { Part4 } from "../LessonsLearned/part4.js";
import { Conclusion } from "../Conclusion/Conclusion.js";

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
          <Part2 />
          <Part3 />
          <Part4 />
          <Conclusion />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
