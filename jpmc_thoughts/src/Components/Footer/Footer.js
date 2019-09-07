import React from "react";
import "./Footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <p> Made by Salvador Villalon </p>
        <ul>
          <a target="_blank" href="https://medium.com/@salvav1"><li>Medium</li></a>
          <li> | </li>
          <a target="_blank" href="https://github.com/salvillalon45"><li>GitHub</li></a>
          <li> | </li>
          <a target="_blank" href="https://www.linkedin.com/in/salvadorvillalon/"><li>LinkedIn</li></a>
          <li> | </li>
          <a target="_blank" href="https://salvillalon45.github.io"><li>Portfolio</li></a>
        </ul>
      </footer>
    )
  }
}
