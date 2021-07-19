import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import DashBoard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound"


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />

      <Route exact path="/dashboard/:id">
        <DashBoard />
      </Route>
      
      <Route exact path="*" component={PageNotFound}/>
    </Switch>
  </Router>  
)

export default AppRouter;