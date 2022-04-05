import { LOG_IN, LOG_OUT, GET_USER, SWITCH_THEME, CHANGE_LANG, MENU_TABLE, NAME_TABLE } from "../actions/actionType";
const initState = {
    Login: {
        username: '',
        fullname: '',
        isLogin: false
    },
    Theme: {
        themeMode: 'dark'
    },
    Lang: {
        langis:'vi'
    },
    Table: {
        table: 'HOSE',
        menu_table: 'HOSE',
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
                    fullname: action.payload.fullname,
                    username:action.payload.username,
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
        case MENU_TABLE:
            return {
                ...state,
                Table: {
                    ...state.Table,
                    table: action.payload
                }
            }
        case NAME_TABLE: 
            return {
                ...state,
                Table: {
                    ...state.Table,
                    menu_table: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;