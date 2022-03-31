import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { path } from "./routes/path";
import Login from "./components/Login/Login";
import { checkLogin } from './redux/selectors/selectorLogin'

function PrivateRoute ({children}) {
  const usercheck = useSelector(checkLogin);
  return usercheck ? children : <Navigate to={path.LOGIN} />;
}

const PrivateRouteLogin = ({children}) => {
  const usercheck = useSelector(checkLogin);
  return !usercheck ? children : <Navigate to={path.HOME} />
}

  function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path={path.LOGIN} element={
          <PrivateRouteLogin>
            <Login/>
          </PrivateRouteLogin>
        }/>
        <Route path={path.HOME} element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }/>
        </Routes> 
      </BrowserRouter>
    );
  }

export default App;
