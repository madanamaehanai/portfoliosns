// import React, { useContext, useRef } from "react";
import axios from "axios";
import React, { useRef } from "react";

function Login() {
  const email = useRef();
  const password = useRef();

  

  const handleSubmit = async (e) => {
    e.preventDefault(); //リロード回避
    // console.log(email);
    // console.log(password);
  
    axios.post('/api/auth/login', {
        email: 'email',
        password: 'password'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="Eメール" ref={email} />
        <input type="password" placeholder="パスワード" ref={password} />
        <button />
      </form>
    </div>
  );
}

export default Login;
