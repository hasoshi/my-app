import { LOG_IN, LOG_OUT, SWITCH_THEME, GET_USER, CHANGE_LANG } from "./actionType";

export const logins = (data) => {
    return {
        type: LOG_IN,
        payload: data
    };
}
export const logouts = (data) => {
    return {
        type: LOG_OUT,
        payload: data
    }
}

export const SwitchTheme = (text) => {
    return {
        type:SWITCH_THEME,
        payload: text
    }
}

export const SwitchLang = (text) => {
    return {
        type: CHANGE_LANG,
        payload: text
    }
}

export const GetUser = (data) => {
    return {
        type:GET_USER,
        payload: data
    }
}

