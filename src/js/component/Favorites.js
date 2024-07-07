import React, { useContext } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Context } from "../store/appContext";

const Favorites = ({ favorite }) => {
  const { actions } = useContext(Context);
  return (
    <div className="container border border-black ">
      <a
        className="dropdown-item d-flex align-items-center justify-content-between p-0"
        href="#"
      >
        <span>{favorite.name}</span>
        <RiDeleteBin2Line onClick={() => actions.deleteFavorite(favorite)} />
      </a>
    </div>
  );
};

export default Favorites;
