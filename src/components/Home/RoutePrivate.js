import React from 'react';
import Home from './Home';
import { useSelector } from 'react-redux';
import { checkLogin} from '../../redux/selectors/selectorLogin';
import Login from '../Login/Login';

function RoutePrivate(){
    const usercheck = useSelector(checkLogin);
    
    if(usercheck){
        return <Home />
    }else{
        return <Login />
    }
}
export default RoutePrivate;