import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col sm={12} md={6} className="foot_box">
            <div className="head">Sign Up For The Newsletter</div>
            <div className="desc">
              Want to be the first to read our news? Subscribe to the newsletter
              to keep abreast of all events.
            </div>
            <div className="d-flex form">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
              <button className="btn btn-dark">Subscribe</button>
            </div>
            <div className="icons d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=100007172563893"
                target="_blanck"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/+201091415560" target="_blanck">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://twitter.com/AbdallhSabry9" target="_blanck">
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/abdallhrakha/"
                target="_blanck"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          <Col sm={12} md={6} className="foot_box">
            <div className="head">Hours & Location</div>
            <div className="location">
              <h5>Atawa 12th St,Tanta, Eg</h5>
              <p>+201091415560</p>
            </div>
            <div className="hours">
              <h5>Monday - Sunday</h5>
              <p>07:00 - 17:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
