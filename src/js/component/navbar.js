import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Favorites from "./Favorites";
import logo from "../../img/Star-Wars-Logo.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <ul className="nav nav-pills d-flex justify-content-between align-items-center border-bottom">
        <li className="nav-item">
          <a className="navbar-brand" href="#">
            <Link to={"/"}>
              <img
                src={logo}
                alt="Logo"
                width="150"
                height="120"
                className="d-inline-block align-text-top"
              />
            </Link>
          </a>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white border border-white "
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Favorites
            <span className="badge rounded-pill bg-success mx-1">
              {store.favorites.length}
            </span>
          </a>
          <ul className="dropdown-menu">
            <li>
              {store.favorites?.map((favorite) => (
                <Favorites key={favorite.uid} favorite={favorite} />
              ))}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
