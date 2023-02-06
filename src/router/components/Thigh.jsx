import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Thigh_Img from "./img/Thigh.jpg";
import Thigh_Vid_01 from "./video/Thigh_01.mp4";
import Thigh_Vid_02 from "./video/Thigh_02.mp4";
import Thigh_Vid_03 from "./video/Thigh_03.mp4";
import Thigh_Vid_04 from "./video/Thigh_04.mp4";
const Thigh = () => {
  return (
    <div className="ExerciseMenu Thigh">
      <Container>
        <Row>
          <Col md={3} sm={12} className="head_box">
            <d className="head">Thigh muscles</d>
            <p className="desc">
              Maintain volume consistency and help lose excess fat.
              Strengthening joints, maintaining bone health, and preventing them
              from fragility. Boosting testosterone and growth hormone levels.
              Improve the appearance of the buttocks.
            </p>
            <a
              href="https://exrx.net/Lists/ExList/ThighWt"
              className="moreInfo"
              target="_blank"
              rel="noreferrer"
            >
              More Exercise
            </a>
          </Col>
          <Col md={3} sm={12} className="img_box">
            <img src={Thigh_Img} alt="" className="img-fluid" />
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Thigh_Vid_01}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Thigh_Vid_02}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Thigh_Vid_03}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Thigh_Vid_04}
              className="vid"
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Thigh;
