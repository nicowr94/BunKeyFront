import React from "react";
import Navigation from "../components/Navigation";
import { Redirect } from "react-router-dom";

export default function Layout(props) {
  // if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <React.Fragment>
      <Navigation />
      {props.children}
    </React.Fragment>
  );
}
