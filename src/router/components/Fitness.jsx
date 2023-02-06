import React from "react";
import Arm from "./Arm";
import Back from "./Back";
import Chest from "./Chest";
import FoodSys from "./FoodSys";
import Shoulder from "./Shoulder";
import Thigh from "./Thigh";

const Fitness = () => {
  return (
    <div id="Exercise" className="Fitness">
      <Chest />
      <Arm />
      <Shoulder />
      <Back />
      <Thigh />
      <FoodSys />
    </div>
  );
};

export default Fitness;
