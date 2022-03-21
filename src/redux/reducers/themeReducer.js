import { SWITCH_THEME } from "../actions/themeActions";

const initState = {
    theme: 'dark'
}

const themeReducer = (state = initState, action) => {
    switch(action.type) {
        case SWITCH_THEME:
            return { 
                theme: 'light' 
            };
        default:
            return state;
    }
}

export default themeReducer;