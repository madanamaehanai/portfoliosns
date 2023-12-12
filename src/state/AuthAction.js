//ユーザー入力に応じたアクションの設定

export const LoginStart = (user) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
});

export const LOGOUT_SUCCESS = (error) => ({
    type: "LOGOUT_SUCCESS",
    payload: error,
});

export const LOGOUT_ERROR = (error) => ({
    type: "LOGOUT_ERROR",
    payload: error,
});
