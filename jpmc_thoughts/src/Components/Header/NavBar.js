import React from "react";
import "./NavBar.css";

export class NavBar extends React.Component {
  render() {
    // fixed-top makes the navbar stick to the top of the screen as the user is scrolling
    // ml-auto makes content of navbar to the left, but not the logo
    return (
      <section>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#aboutme">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#theProject">The Project</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#lessonsLearned">Lessons Learned</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pictures">Pictures</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#conclusion">Conclusion</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </section>
    )
  }
}
