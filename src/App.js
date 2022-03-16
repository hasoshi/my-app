
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends React.Component{
  render() {
    return (
      // <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Home/:username" component={Home}/>
      </Switch> 
      </BrowserRouter>
      // </div>
    );
  }
}


export default App;
