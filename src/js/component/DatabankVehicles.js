import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const DatabankVehicles = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <h1>Databank | Vehicles</h1>
      <hr />
      <div className=" container-card ">
        {store.vehicles?.map((item) => (
          <Card key={item.uid} item={item} text={"vehicles"} />
        ))}
      </div>
    </div>
  );
};

export default DatabankVehicles;
