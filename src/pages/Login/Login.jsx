import React from "react";
import LoginSide from "../../components/LoginSide/LoginSide";
import LoginMain from  "../../components/LoginMain/LoginMain";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <LoginSide />
      <LoginMain />
    </div>
  )
}

export default Login;
