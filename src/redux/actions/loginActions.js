export const LOG_IN = "LOG_IN";

export const logins = (login) => {
    return {
        type: LOG_IN,
        payload: login
    };
}

