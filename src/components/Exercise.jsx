import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetKey } from "../Redux/ExerciseSlice";
import exercise_Img from "./img/exercise.jpg";
const Exercise = () => {
  const [searchKey, setsearchKey] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const HandleSearch = async (e) => {
    e.preventDefault();
    dispatch(SetKey({ searchKey }));
    navigate("/exercise");
  };
  return (
    <div className="exercise">
      <Container>
        <Row className="revert_MobileView">
          <Col md={6} sm={12} className="execise_box img_box">
            <img src={exercise_Img} alt="exercise_Img" className="img-fluid" />
          </Col>
          <Col md={6} sm={12} className="execise_box txt_box">
            <div className="content">
              <div className="head">Free Fitness Training</div>
              <div className="desc">
                Get some exercise for free, and you can try it at home if you
                are unable to pay the monthly subscription fee, or if you are
                busy and unable to go to the gym.
              </div>
              <Form className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of the Exercise"
                  onChange={(e) => {
                    setsearchKey(e.target.value.toLowerCase());
                  }}
                />
                <input
                  type="submit"
                  value={"Search"}
                  className="submit"
                  onClick={HandleSearch}
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Exercise;
