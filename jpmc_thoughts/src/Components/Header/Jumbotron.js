import React from "react";
import "./Jumbotron.css";

export class Jumbotron extends React.Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h1>Salvador Villalon</h1>
          <p>Software Engineer Intern at JPMorgan Chase & Co</p>
          <p>University of California, Irvine</p>
          <p>B.S in Computer Science</p>
        </div>
      </div>
    )
  }
}
