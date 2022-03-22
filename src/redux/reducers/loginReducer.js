import { LOG_IN } from "../actions/loginActions";
const initState = {
    Login: {
        username: '',
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
                   isLogin: action.payload
               }
                
            }
        default:
            return state;
    }
}

export default loginReducer;