import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { Pictures } from "../Pictures/Pictures.js";


class App extends React.Component {
  render() {
    return (
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
        <Pictures />
        <Footer />
      </div>
    )
  }
}

export default App;
