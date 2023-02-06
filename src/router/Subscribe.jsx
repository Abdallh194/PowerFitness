import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <Container>
        <div className="head">Subscription plans</div>
        <Row>
          <Col sm={12} md={3} className="subscribe_box">
            <div className="subType">Basic</div>
            <div className="price">5$</div>
            <div className="priceLimit">Per Month</div>
            <div className="desc">
              This is the normal subscription price, without any features and
              without an assistant coach
            </div>
            <div className="submit">Subscribe</div>
          </Col>
          <Col sm={12} md={3} className="subscribe_box">
            <div className="subType">Team</div>
            <div className="price">20$</div>
            <div className="priceLimit">Per Month</div>
            <div className="desc">
              This is the team subscription price, with some features and no
              assistant coach
            </div>
            <div className="submit">Subscribe</div>
          </Col>
          <Col sm={12} md={3} className="subscribe_box">
            <div className="subType">Family</div>
            <div className="price">50$</div>
            <div className="priceLimit">Per Month</div>
            <div className="desc">
              This is the price of the family subscription, with some features
              and an assistant coach
            </div>
            <div className="submit">Subscribe</div>
          </Col>
          <Col sm={12} md={3} className="subscribe_box">
            <div className="subType">Pro</div>
            <div className="price">80$</div>
            <div className="priceLimit">Per Month</div>
            <div className="desc">
              This is the price of the Pro subscription, which includes all the
              features and an assistant coach
            </div>
            <div className="submit">Subscribe</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
