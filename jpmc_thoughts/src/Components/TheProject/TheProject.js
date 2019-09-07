import React from "react";
import "./TheProject.css";
import groovy from "./groovy.png";
import springBoot from "./spring_boot.png";
import gradle from "./gradle.png";
import intellij from "./IntelliJ.png";
import js from "./JavaScript.png";
import react from "./react.png";
import spock from "./spock.PNG";

export class TheProject extends React.Component {
  render() {
    return (
        <div className="TheProject" id="theProject">
          <div className="container">

            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h2> The Project </h2>
                  <p>Throughout the internship, we worked on implementing from scratch a full-stack web application using Groovy, React, and Spring Boot.</p>
                  <p>Let me give you some background on why we were working on this. Our team worked on a system that clients who are companies depend on for their transactions (so if this system was down, then the companies could not do their transactions). There was a product team that worked with my team and they worked with companies and their invoices. <strong>Here is the interesting part</strong>. The product team will send a file with company’s invoice information and my team had to get this file and manually copy and paste the information into a system they had.</p>
                  <p>Our task was to remove this manual task and improve it through the web application we were going to implement.</p>
                </div>
              </div>
            </div>

            <div className="row pics">
              <div className="col-md-4">
                <img src={ springBoot } />
              </div>

              <div className="col-md-4">
                <img src={ groovy } />
              </div>

              <div className="col-md-4">
                <img src={ react } />
              </div>
            </div>

            <div className="row pics extra-row">
              <div className="col-md-4">
                <img src={ intellij } />
              </div>

              <div className="col-md-4">
                <img src={ js } />
              </div>

              <div className="col-md-4">
                <img src={ gradle } />
              </div>
            </div>

            <div className="row pics extra-row spock">
              <div className="col-md-12">
                <img src={ spock } />
              </div>
            </div>
          </div>
        </div>
    )
  }
}
