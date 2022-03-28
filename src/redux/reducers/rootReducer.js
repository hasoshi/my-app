import { LOG_IN, LOG_OUT, GET_USER, SWITCH_THEME, CHANGE_LANG } from "../actions/actionType";
const initState = {
    Login: {
        username: '',
        isLogin: false
    },
    Theme: {
        themeMode: 'dark'
    },
    Lang: {
        langis:'vi'
    }
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
               ...state,
               Login: {
                   ...state.Login,
                   isLogin: action.payload
               }
                
            }
        case GET_USER:{
            return{
                ...state,   
                Login: {
                    ...state.Login,
                    username:action.payload,
                }
            }
        }

        case LOG_OUT:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
        case SWITCH_THEME:
            return {
                ...state,
                Theme: {
                    ...state.Theme,
                    themeMode: action.payload
                }
            }
        case CHANGE_LANG:
            return{
                ...state,
                Lang: {
                    ...state.Lang,
                    langis: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;