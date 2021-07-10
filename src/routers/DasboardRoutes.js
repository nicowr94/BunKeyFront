import React from "react";
import Navigation from "../components/Navigation";
import { Route, Switch } from "react-router-dom";

import CreateCourse from "../components/CreateCourse";
import CreateStudent from "../components/CreateStudent";
import EnrollmentList from "../components/EnrollmentList";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function DasboardRoutes() {
  return (
    <React.Fragment>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cursos" component={CreateCourse} />
          <Route exact path="/estudiantes" component={CreateStudent} />
          <Route exact path="/inscripciones" component={EnrollmentList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
