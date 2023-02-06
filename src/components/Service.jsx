import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import service_img from "./img/service.png";
const Service = () => {
  return (
    <div className="service">
      <Container>
        <div className="featuers">Our Services</div>
        <div className="desc">
          We offer you the best private trainer for you, and they will follow
          you moment by moment and provide you with the best diet for your
          condition
        </div>
        <Row>
          <Col md={4} sm={12} className="feat_box">
            <Col md={12} sm={12} className="feat_details feat_details_LeftTop">
              <div className="head">BodyBuilding</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <Link to="/subscribe" className="subscribe">
                Subscribe Now <i className="bi bi-arrow-right"></i>
              </Link>
            </Col>
            <Col
              md={12}
              sm={12}
              className="feat_details feat_details_LeftTBottom"
            >
              <div className="head">Thinness and obesity</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <Link to="/subscribe" className="subscribe">
                Subscribe Now <i className="bi bi-arrow-right"></i>
              </Link>
            </Col>
          </Col>
          <Col md={4} sm={12} className="feat_box">
            <img src={service_img} className="img-fluid" alt="service_img" />
          </Col>
          <Col md={4} sm={12} className="feat_box d_block_MobileView">
            <Col md={12} sm={12} className="feat_details feat_details_RightTop">
              <div className="head">Military rehabilitation</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <Link to="/subscribe" className="subscribe">
                Subscribe Now <i className="bi bi-arrow-right"></i>
              </Link>
            </Col>
            <Col
              md={12}
              sm={12}
              className="feat_details feat_details_RightBottom"
            >
              <div className="head">other sports</div>
              <div className="desc">
                Here you will find the best trainers and the best and latest
                equipment to build muscles and provide the best diet
              </div>
              <Link to="/subscribe" className="subscribe">
                Subscribe Now <i className="bi bi-arrow-right"></i>
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
