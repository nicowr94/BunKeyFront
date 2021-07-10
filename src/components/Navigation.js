import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export default function Navigation() {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  let history = useHistory();

  const logout_user = () => {
    dispatch({
      types: types.logout,
      payload: {
        name: "",
      },
    });

    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          BunkeyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/cursos">
                Cursos
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/estudiantes">
                Estudiantes
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/inscripciones">
                Inscripciones
              </Link>
            </li>
          </ul>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">{name}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={logout_user}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
