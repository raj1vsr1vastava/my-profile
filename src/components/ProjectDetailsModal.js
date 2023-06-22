import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      // var url = this.props.data.url;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "250%" }}>
                    <p className="text-center" style={{ fontSize: "50%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }

        if(this.props.data.description){
          var descript = description.map((desc, i) => {
            return (<div>
                      <p style={{ textAlign: "left" }}>
                        {desc}
                      </p>
            </div>
              // <li className="list-inline-item mx-3">
              //   {/* <span> */}
              //     <div className="text-center" key={i} data-src={desc}>
              //       {/* <i className={icons.class} style={{ fontSize: "250%" }}> */}
              //         {/* <p className="text-center" style={{ fontSize: "50%" }}> */}
                      
              //         {/* </p> */}
              //       {/* </i> */}
              //     </div>
              //   {/* </span> */}
              // </li>
            );
          });
        }

      }
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {title}
              {/* {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null} */}
            </h3>
            <p className="modal-description">
              {descript}
            </p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">
                {tech}
              </ul>
            </div>
          </div>
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
