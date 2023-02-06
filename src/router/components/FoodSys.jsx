import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Food_Img_01 from "./img/Food_01.jpg";
import Food_Img_02 from "./img/Food_02.jpg";
import Food_Img_03 from "./img/Food_03.jpg";
const FoodSys = () => {
  return (
    <div className="FoodSys">
      <Container>
        <div className="head">Maintain a healthy diet</div>
        <Row>
          <Col sm={12} md={4} className="food_Box">
            <img src={Food_Img_01} alt="food" className="img-fluid" />
            <div className="header">Fruits</div>
            <div className="desc">
              Fruit is full of vitamins, minerals, fiber, antioxidants, and
              phytonutrients that work together in the body to boost the immune
              system.
            </div>
          </Col>
          <Col sm={12} md={4} className="food_Box">
            <img src={Food_Img_02} alt="food" className="img-fluid" />
            <div className="header">Vegetables Soup</div>
            <div className="desc">
              Vegetable soup supplies the bodybuilder with the energy it needs.
              This soup strengthens bones and muscles
            </div>
          </Col>
          <Col sm={12} md={4} className="food_Box">
            <img src={Food_Img_03} alt="food" className="img-fluid" />
            <div className="header">Beef</div>
            <div className="desc">
              Beef also provides health-supporting amino acids and is one of the
              largest sources of protein in the human diet
            </div>
          </Col>
        </Row>
        <div className="more">More About FoodSys</div>
      </Container>
    </div>
  );
};

export default FoodSys;
