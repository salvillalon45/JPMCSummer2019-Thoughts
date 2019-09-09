import React from "react";
import "./NavBar.css";

export class NavBar extends React.Component {
  render() {
    // fixed-top makes the navbar stick to the top of the screen as the user is scrolling
    // ml-auto makes content of navbar to the left, but not the logo
    return (
      <section>
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#aboutme">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#theProject">The Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#lessonsLearned">Lessons Learned</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#conclusion">Conclusion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pictures">Pictures</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </section>
    )
  }
}
