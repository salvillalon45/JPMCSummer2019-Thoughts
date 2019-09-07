import React from "react";
import "./Challenges.css";

export class Challenges extends React.Component {
  render() {
    return (
      <div className="Challenges" id="challenges">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2> Challenges from Internship </h2>
                <p>The team has never worked on frontend applications. They were not able to give us direct guidance on this. This meant that the team has never used frontend technologies based on the standards of the firm.</p>
                <p>They also wanted authentication and authorization, but the team has never done this before. I had to research how JPMC implements OAuth and implemented in the application.</p>
                <p>They also wanted this application to go to the Production Environment, but they have never deployed a frontend application in JPMC environment before.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
