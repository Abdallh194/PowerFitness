import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Fitness from "./components/Fitness";
import Home_Img from "./img/home.png";
function Exercise() {
  return (
    <Fragment>
      <div className="AllExercise">
        <div className="overlay">
          <div className="content">
            <img src={Home_Img} alt="home" className="img-fluid" />

            <div className="head">Elite Personl Training</div>
            <div className="desc">
              Individualized Programs. Dedicated Trainers.
            </div>
            <a href="#Exercise" className="Start">
              Get Start
            </a>
          </div>
        </div>
      </div>
      <Fitness />
      <Footer />
    </Fragment>
  );
}

export default Exercise;
