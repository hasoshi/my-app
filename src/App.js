
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

  function App() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Home" component={Home}/>
      </Switch> 
      </BrowserRouter>
    );
  }

export default App;
