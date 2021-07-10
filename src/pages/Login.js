import React, { useContext } from "react";
import "../css/Login.css";
import img_bunkey from "../img/bunkey_alt.png";
import logo from "../img/logo-bunkers.gif";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export default function Login() {
  let history = useHistory();

  const lastPath = localStorage.getItem("lastPath") || "/";
  const { dispatch } = useContext(AuthContext);

  const login_user = () => {
    dispatch({
      types: types.login,
      payload: {
        name: "Nicolas Wong",
      },
    });
    history.replace(lastPath);
  };

  // if (isAuth) return <Redirect to="/" />;

  return (
    <div id="bg-form">
      <div className="d-flex align-items-center min-vh-100 py-3 py-md-0 ">
        <div className="container">
          <div className="card login-card">
            <div className="row">
              <div className="col-md-5 col-sm-12 img-content">
                <img
                  src={img_bunkey}
                  alt="login"
                  className="login-card-img img-thumbnail"
                />
              </div>
              <div className=" col-lg-5 col-md-7 col-sm-12 form-content">
                <div className="card-body">
                  <div className="brand-wrapper">
                    <img src={logo} alt="logo" className="logo" />
                  </div>
                  <p className="login-card-description">
                    Iniciar sesión con su cuenta
                  </p>
                  <form action="#!">
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Correo"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Contraseña"
                      />
                    </div>
                    <input
                      name="login"
                      id="btn-login"
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      value="Ingresar"
                      // onClick={() => callback(login_user)}
                      onClick={login_user}
                    />
                  </form>
                  <a href="#!" className="forgot-password-link">
                    ¿Se te olvidó tu contraseña?
                  </a>
                  <p className="login-card-footer-text">
                    ¿No tienes una cuenta?{" "}
                    <a href="#!" className="text-reset">
                      Registrate aquí
                    </a>
                  </p>
                  <nav className="login-card-footer-nav">
                    <p>
                      Desarrollado por <a href="#!">Nicolas Wong</a>
                    </p>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
