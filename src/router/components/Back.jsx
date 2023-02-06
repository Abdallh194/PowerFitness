import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Back_Img from "./img/Back.jpg";
import Back_Vid_01 from "./video/Back_01.mp4";
import Back_Vid_02 from "./video/Back_02.mp4";
import Back_Vid_03 from "./video/Back_03.mp4";
import Back_Vid_04 from "./video/Back_04.mp4";
const Back = () => {
  return (
    <div className="ExerciseMenu Back">
      <Container>
        <Row className="ReversBox">
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Back_Vid_01}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Back_Vid_02}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Back_Vid_03}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Back_Vid_04}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="img_box">
            <img src={Back_Img} alt="" className="img-fluid" />
          </Col>
          <Col md={3} sm={12} className="head_box">
            <d className="head">Back muscles</d>
            <p className="desc">
              Strengthening the muscles adjacent to the spine, and contributing
              to the removal of pressure on the vertebrae and joints. Helping to
              get rid of stiffness, and work to increase the ease of movement.
              Increase blood flow in the circulatory system, bringing food and
              blood to all parts of the body, especially the spine
            </p>
            <a
              href="https://exrx.net/Lists/ExList/BackWt"
              className="moreInfo"
              target="_blank"
              rel="noreferrer"
            >
              More Exercise
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Back;
