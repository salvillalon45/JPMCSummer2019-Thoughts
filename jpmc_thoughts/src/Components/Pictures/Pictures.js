import React from "react";
import "./Pictures.css";
import pic_1 from "./pic_1.jpg";
import pic_2 from "./pic_2.jpg";
import pic_3 from "./pic_3.jpg";
import pic_5 from "./pic_5.jpeg";
import pic_6 from "./pic_6.jpeg";
import pic_7 from "./pic_7.jpeg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     showModal: false,
     show: false,
   };
   // this.handlePictureClick = this.handlePictureClick.bind(this);
   // this.handleOpenModal = this.handleOpenModal.bind(this);
   // this.handleCloseModal = this.handleCloseModal.bind(this);
   this.handleShow = this.handleShow.bind(this);
   this.handleClose = this.handleClose.bind(this);
 }

 handleOpenModal () {
   this.setState({ showModal: true });
 }

 handleCloseModal () {
   this.setState({ showModal: false });
 }

 handleShow(id) {
   console.log(id);
   // this.setState({ show : true});
   this.setState({ show : id});
 }

 handleClose() {
   // this.setState({show: false});
   this.setState({ show : null});
 }

  handlePictureClick(event) {
    console.log("Inside handlePictureClick");
    // Get the modal
    var modal = document.getElementById("myModal");
    console.log("modal:: " + modal);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.onclick = function() {
      console.log("Inside the click");
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      console.log("modal:: " + modalImg);
      console.log("modal:: " + captionText);
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  }



  render() {
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

          <div className="row">

            <Button variant="primary" onClick={this.handleShow("pic_2")}>
              <img id="myImg" className="responsive" src={ pic_2 } alt="My intern team for Summer 2019" />
            </Button>

            <Modal show={this.state.show === "pic_2"} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>My intern team for Summer 2019</Modal.Title>
              </Modal.Header>
              <Modal.Body><img className="responsive" src={ pic_2 } alt="My intern team for Summer 2019" /></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            // <div className="column">
            //   <img id="myImg" className="responsive" onClick={this.handlePictureClick} src={ pic_2 } alt="My intern team for Summer 2019" />
            // </div>

            <Button variant="primary" onClick={this.handleShow("pic_5")}>
              <img id="myImg" className="responsive" src={ pic_5 } alt="These are the interns in the 30th floor" />
            </Button>

            <Modal show={this.state.show === "pic_5"} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>These are the interns in the 30th floor</Modal.Title>
              </Modal.Header>
              <Modal.Body><img className="responsive" src={ pic_5 } alt="These are the interns in the 30th floor" /></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            // <div className="column">
            //   <img id="myImg" className="responsive" onClick={this.handlePictureClick} src={ pic_5 } alt="These are the interns in the 30th floor" />
            // </div>

            // <div id="myModal" className="modal">
            //   <span className="close">&times;</span>
            //   <img className="modal-content" id="img01"/ >
            //   <div id="caption"></div>
            // </div>
          </div>

          <div className="row">
            <div className="column">
              <img className="responsive" src={ pic_6 } alt="JPMC Hosted a Boat Cruise for interns" />
            </div>

            <div className="column">
              <img className="responsive" src={ pic_7 } alt="Dropping Friend at Airport" />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <img className="responsive" src={ pic_1 } alt="My friend Karen and I at Navy Pier during Fourth of July" />
            </div>

            <div className="column">
              <img className="responsive" src={ pic_3 } alt="Part of the team I worked on during my internship"/>
            </div>
          </div>

        </div>
      </div>

    )
  }
}
