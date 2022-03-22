import { LOG_IN } from "../actions/loginActions";
const initState = {
    Login: {
        "username": localStorage.getItem("username"),
        isLogin: false
    }
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
               ...state,
               Login: {
                   ...state.Login,
                   username: action.payload,
                   isLogin: action.payload
               }
                
            }
        default:
            return state;
    }
}

export default loginReducer;