import React, { useContext, useState } from "react";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { GrFavorite } from "react-icons/gr";
const Card = ({ item, text }) => {
  const { name, uid } = item;
  const [isBotonFavorite, setisBotonFavorite] = useState(false);
  const { actions } = useContext(Context);

  // La imagen de planeta nº 1 no existe, lo verifico y la cambio por una predeterminada
  const newUrl = "https://starwars-visualguide.com/assets/img/planets/11.jpg";
  const handleError = (e) => {
    e.target.src = newUrl;
  };
  const clickAddFavorites = (item) => {
    setisBotonFavorite(!isBotonFavorite);
    if (isBotonFavorite === false) {
      actions.addFavorite(item);
    } else {
      actions.deleteFavorite(item);
    }
  };

  return (
    <div className="card">
      <img
        onError={handleError}
        className="img-top-fluid w-100"
        src={`https://starwars-visualguide.com/assets/img/${text}/${uid}.jpg`}
        alt={name}
      />
      <div className="card-body ">
        <h5 className="card-title text-center text-dark">{name}</h5>
        <div className="d-flex justify-content-around align-items-center ">
          <Link to={`details/${text}/${uid}`}>
            <button type="button" role="button" className="button">
              Detalles
            </button>
          </Link>
          <button
            type="button"
            className="text-warning border border-warning rounded btn btn-grad"
            onClick={() => clickAddFavorites(item)}
          >
            {!isBotonFavorite ? <GrFavorite /> : "quitarlo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
