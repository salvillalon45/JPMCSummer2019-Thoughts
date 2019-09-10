import React from "react";
import "./Pictures.css";
import pic_1 from "./pic_1.jpg";
import pic_2 from "./pic_2.jpg";
import pic_3 from "./pic_3.jpg";
import pic_5 from "./pic_5.jpeg";
import pic_6 from "./pic_6.jpeg";
import pic_7 from "./pic_7.jpeg";

export class Pictures extends React.Component {
  render() {
    // <!-- The <ol> tag is for the tabs below the heading of each picture     -->
    return (
        <div className="Pictures" id="pictures">
          <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h2> Pictures </h2>
                    <p>Here are some pictures of my adventures in Chicago!</p>
                  </div>
                </div>
              </div>

          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pic_2} className="responsive" className="d-block w-100" alt="My intern team for Summer 2019"/>
                <div className="carousel-caption d-md-block">
                  <h5>My intern team for Summer 2019</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic_5} className="d-block w-100" alt="These are the interns in the 30th floor. Fun group to be with!"/>
                <div className="carousel-caption d-md-block">
                  <h5>These are the interns in the 30th floor. Fun group to be with!</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic_6} className="d-block w-100" alt="JPMC Hosted a Boat Cruise for interns"/>
                <div className="carousel-caption d-md-block">
                  <h5>JPMC Hosted a Boat Cruise for interns</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic_7} className="d-block w-100" alt="Dropping Friend at Airport"/>
                <div className="carousel-caption d-md-block">
                  <h5>Dropping Friend at Airport</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic_1} className="d-block w-100" alt="My friend Karen and I at Navy Pier during Fourth of July"/>
                <div className="carousel-caption d-md-block">
                  <h5>My friend Karen and I at Navy Pier during Fourth of July</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic_3} className="d-block w-100" alt="Part of the team I worked on during my internship"/>
                <div className="carousel-caption d-md-block">
                  <h5>Part of the team I worked on during my internship</h5>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
