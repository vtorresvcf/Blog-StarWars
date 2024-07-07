import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";
const DatabankPeople = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <h1>Databank | People</h1>
      <hr />
      <div className=" container-card ">
        {store.people?.map((item) => (
          <Card key={item.uid} item={item} text={"characters"} />
        ))}
      </div>
    </div>
  );
};

export default DatabankPeople;
