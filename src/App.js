
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import RoutePrivate from "./components/Home/RoutePrivate";

  function App() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Home" component={RoutePrivate}/>
      </Switch> 
      </BrowserRouter>
    );
  }

export default App;
