import axios from "axios";

export const loginCall = async (user, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const response = await axios.post("auth/login", user);
        console.log("成功");
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (err) {
        console.log("失敗");
        dispatch({ type: "LOGIN_ERROR", payload: err });
    }
};

export const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT_START" });
    try {
        // ログアウトが成功した場合
        console.log("ログアウト成功");
        dispatch({ type: "LOGOUT_SUCCESS", payload: "" });
    } catch (err) {
        // ログアウトが失敗した場合
        console.log("ログアウト失敗");
        dispatch({ type: "LOGOUT_ERROR", payload: err });
    }
};