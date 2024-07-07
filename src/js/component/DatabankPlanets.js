import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";
const DatabankPlanets = ({}) => {
  const { store } = useContext(Context);

  return (
    <div>
      <h1>Databank | Planets</h1>
      <hr />
      <div className=" container-card ">
        {store.planets?.map((item) => (
          <Card key={item.uid} item={item} text={"planets"} />
        ))}
      </div>
    </div>
  );
};

export default DatabankPlanets;
