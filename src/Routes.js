import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/search/photos/:query"} component={Search} />
    </Switch>
  );
};

export default Routes;
