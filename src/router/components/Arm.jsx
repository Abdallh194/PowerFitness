import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arm_Img from "./img/Arm.jpg";
import Arm_Vid_01 from "./video/Arm_01.mp4";
import Arm_Vid_02 from "./video/Arm_02.mp4";
import Arm_Vid_03 from "./video/Arm_03.mp4";
import Arm_Vid_04 from "./video/Arm_04.mp4";
const Arm = () => {
  return (
    <div className="ExerciseMenu Arm">
      <Container>
        <Row className="ReversBox">
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Arm_Vid_01}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Arm_Vid_02}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Arm_Vid_03}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Arm_Vid_04}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="img_box">
            <img src={Arm_Img} alt="" className="img-fluid" />
          </Col>
          <Col md={3} sm={12} className="head_box">
            <d className="head">Arm muscles</d>
            <p className="desc">
              As it helps the arm to remain stable while doing exercises and
              strengthen the hand grip, and the forearms contain 3 types of
              muscles: the inner forearm muscles. The muscles of the outer
              forearm are the brachialis muscle
            </p>
            <a
              href="https://exrx.net/Lists/ExList/ArmWt"
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

export default Arm;
