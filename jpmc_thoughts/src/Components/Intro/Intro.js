import React from "react";
import "./Intro.css";

export class Intro extends React.Component {
  render() {
    return (
      <div class="about-me" id="aboutme">
        <div class="container">
          <div class="row">

            <div class="col-md-4">
              <div class="about-picture">
              </div>
            </div>

            <div class="col-md-8">
              <div class="about-text">
                <p class="about-text-title"> About Salvador Villalon </p>
                <p>I am currently a rising senior at the University of California, Irvine studying Computer Science.</p>
                <p>This summer I was a Software Engineer Intern at JPMorgan Chase & Co. This was a great internship. I like to say that this internship gave me real challenges that happen in industry and it is up to me to learn how to overcome them.</p>
                <p>This website will talk about my experiences here.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
