import React from 'react';
import Home from './Home';
import { useSelector } from 'react-redux';
import { checkLogin} from '../../redux/selectors/selectorLogin';
import Login from '../Login/Login';

function RoutePrivate(){
    const user = useSelector(checkLogin);
    
    if(user){
        return <Home />
    }else{
        return <Login />
    }
}
export default RoutePrivate;