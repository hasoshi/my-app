export const LOG_IN = "LOG_IN";

export const logins = (login) => {
    return (dispatch) => {
        dispatch({
            type: LOG_IN,
            payload: login
        });
    };
}

