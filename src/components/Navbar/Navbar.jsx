import React from "react";
import { Navigate, NavLink } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../assets/react.svg";

export default function Navbar() {
  let activeClassName = "activeNav";

  const setNavLinkClassName = ({ isActive }) => {
    const className = ["nav-link", isActive ? activeClassName : undefined].join(
      " "
    );

    return className;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/movies" className={setNavLinkClassName} end>
                  Home / Rentar
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/movies-user" className={setNavLinkClassName}>
                  Mis Peliculas Rentadas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/login" className={setNavLinkClassName}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Logout" className={setNavLinkClassName}>
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className={setNavLinkClassName}>
                  Registrarse
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
