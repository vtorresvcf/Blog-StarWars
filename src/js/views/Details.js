import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/details.css";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { uid, texto } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    validacion(texto);
  }, []);

  // La imagen de planeta nº 1 no existe, lo verifico y la cambio por una predeterminada
  const newUrl = "https://starwars-visualguide.com/assets/img/planets/11.jpg";
  const handleError = (e) => {
    e.target.src = newUrl;
  };
  // Funcion para modificar el Get de people, sino sería sobre characters y no vale
  const validacion = (text) => {
    if (text == "characters") {
      actions.fetchGetPeopleDetails(uid, "people");
    } else {
      actions.fetchGetPeopleDetails(uid, texto);
    }
  };
  return (
    <div className="container py-5">
      <div class="card mx-auto" style={{ width: "40rem" }}>
        <div className="row no-gutters">
          <div className="col-sm-5">
            <img
              className="imagen"
              onError={handleError}
              src={`https://starwars-visualguide.com/assets/img/${texto}/${uid}.jpg`}
              alt={store.details?.properties.name}
            />
          </div>

          <div className="col-sm-7">
            <div class="card-body">
              <h5 class="card-title">{store.details?.properties.name}</h5>
              <p class="card-text py-2">{store.details?.description}</p>
              <ul>
                <li>Name: {store.details?.properties.name}</li>
                <li>Altura: {store.details?.properties.height}</li>
                <li>Color del pelo: {store.details?.properties.hair_color}</li>
                <li>Color de ojos: {store.details?.properties.eye_color}</li>
              </ul>
            </div>
            <div className="d-flex justify-content-start my-5">
              <button
                onClick={() => navigate("/")}
                className="btn btn-dark w-50 mx-4"
              >
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
