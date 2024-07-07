import React from "react";

import "../../styles/databank.css";
import DatabankPeople from "../component/DatabankPeople";
import DatabankVehicles from "../component/DatabankVehicles";
import DatabankPlanets from "../component/DatabankPlanets";

const DataBank = ({}) => {
  return (
    <div className="px-5 my-3">
      <DatabankPeople />
      <DatabankVehicles />
      <DatabankPlanets />
    </div>
  );
};

export default DataBank;
