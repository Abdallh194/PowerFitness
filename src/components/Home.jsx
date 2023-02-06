import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import About from "./About";
import Exercise from "./Exercise";
import Footer from "./Footer";
import Service from "./Service";
function Home() {
  return (
    <Fragment>
      <div className="home">
        <div className="overlay">
          <Container>
            {/* <div className="wel">Welcome</div>
          <div className="head_01">Power</div>
          <div className="head_02">GYM </div>
          <div className="desc">
            Pure Gym for military rehabilitation and treatment of thinness and
            obesity in men and women
          </div> */}
            <div className="head">Power GYM</div>
            <div className="desc">
              Power Gym for military rehabilitation and treatment of thinness
              and obesity in men and women
            </div>
          </Container>
        </div>
      </div>
      <Service />
      <About />
      <Exercise />
      <Footer />
    </Fragment>
  );
}

export default Home;
