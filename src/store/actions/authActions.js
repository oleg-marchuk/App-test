export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_ERROR = "LOGIN_ERROR";

function loginRequest(data) {
    return {
        type: LOGIN_REQUEST,
        data
    };
}

function loginError(data) {
    return {
        type: LOGIN_ERROR,
        data
    };
}

export const getLogIn = (data) => {
    return (dispatch) => {
        if(data.login === "Admin" && data.password === "12345") {
            localStorage.setItem('successEnter', "true");
            dispatch(loginRequest(data))
        } else {
            dispatch(loginError({text: "Неправильный логин или пароль"}))
        }
    }
}