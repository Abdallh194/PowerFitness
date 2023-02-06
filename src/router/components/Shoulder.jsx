import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Shoulder_Img from "./img/Shoulder.jpg";
import Shoulder_Vid_01 from "./video/Shoulder_01.mp4";
import Shoulder_Vid_02 from "./video/Shoulder_02.mp4";
import Shoulder_Vid_03 from "./video/Shoulder_03.mp4";
import Shoulder_Vid_04 from "./video/Shoulder_04.mp4";
const Shoulder = () => {
  return (
    <div className="ExerciseMenu Shoulder">
      <Container>
        <Row>
          <Col md={3} sm={12} className="head_box">
            <d className="head">Shoulder muscles</d>
            <p className="desc">
              It is one of the muscles with indispensable strength, as it plays
              the role of stabilization and balance when lifting any weight and
              with any movement, and here the work of the shoulder is like the
              link between lifting the weight and the shoulder because the
              center is the point of moving the entire arm
            </p>
            <a
              href="https://exrx.net/Lists/ExList/ShouldWt"
              className="moreInfo"
              target="_blank"
              rel="noreferrer"
            >
              More Exercise
            </a>
          </Col>
          <Col md={3} sm={12} className="img_box">
            <img src={Shoulder_Img} alt="" className="img-fluid" />
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Shoulder_Vid_01}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Shoulder_Vid_02}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Shoulder_Vid_03}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Shoulder_Vid_04}
              className="vid"
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shoulder;
