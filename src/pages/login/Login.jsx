import React, { useContext, useRef } from "react";
// import axios from "axios";
// import React, { useRef } from "react";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault(); //リロード回避
    // console.log(email.current.value);
    // console.log(password.current.value);
  
    loginCall({
      email: email.current.value,
      password: password.current.value,
    }, dispatch);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="Eメール" ref={email} />
        <input type="password" placeholder="パスワード" ref={password} />
        <button>ログイン</button>
      </form>
    </div>
  );
}

export default Login;
