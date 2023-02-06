import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from "./img/About.jpg";
function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col md={6} sm={6} className="txt-box">
            <div className="head">About Power GYM</div>
            <div className="desc">
              Do you want to be a champion? Work out under the supervision of
              our champions in the gym with the champion maker ,Integrated gym,
              bodybuilding, weightlifting, physical strength, slimming, physical
              fitness, military rehabilitation, kungfu and kickboxing
            </div>
            <Link to="/subscribe" className="subscribe">
              Subscribe
            </Link>
          </Col>
          <Col md={6} sm={6} className="img-box">
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
