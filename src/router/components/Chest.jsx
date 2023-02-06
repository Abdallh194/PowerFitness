import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chest_Img from "./img/chest.jpg";
import Chest_Vid_01 from "./video/chest_01.mp4";
import Chest_Vid_02 from "./video/chest_02.mp4";
import Chest_Vid_03 from "./video/chest_03.mp4";
import Chest_Vid_04 from "./video/chest_04.mp4";
const Chest = () => {
  return (
    <div className="ExerciseMenu Chest">
      <Container>
        <Row>
          <Col md={3} sm={12} className="head_box">
            <d className="head">Chest muscles</d>
            <p className="desc">
              She works better, better, than she can do the daily tasks she
              needs to do, than she can do the work tasks. Exercises that help
              increase your mental and psychological state
            </p>
            <a
              href="https://exrx.net/Lists/ExList/ChestWt#General"
              className="moreInfo"
              target="_blank"
              rel="noreferrer"
            >
              More Exercise
            </a>
          </Col>
          <Col md={3} sm={12} className="img_box">
            <img src={Chest_Img} alt="" className="img-fluid" />
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Chest_Vid_01}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Chest_Vid_02}
              className="vid"
            ></video>
          </Col>
          <Col md={3} sm={12} className="video_box">
            <video
              type="video/mp4"
              controls
              src={Chest_Vid_03}
              className="vid"
            ></video>
            <video
              type="video/mp4"
              controls
              src={Chest_Vid_04}
              className="vid"
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Chest;
