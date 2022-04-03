import { LOG_IN, LOG_OUT, SWITCH_THEME, GET_USER, CHANGE_LANG, MENU_TABLE, NAME_TABLE } from "./actionType";

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

export const MenuTable = (data) => {
    return {
        type: MENU_TABLE,
        payload: data
    }
}

export const NameTable = (data) => {
    return {
        type: NAME_TABLE,
        payload: data
    }
}

