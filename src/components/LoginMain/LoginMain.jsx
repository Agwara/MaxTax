import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginMain.css";

import astro from "../../assets/undraw_Astronaut_xko2.svg"

const LoginMain = () => {
  return (
    <div className="login-main">
      <div className="login-main__astro">
        <img
          alt=""
          src={astro}
          width="100%"
        />
      </div>

      <LoginForm />

      <div className="login-main__bottom-text">
        <p>All rights reserved &copy; 2020 STAR WARS</p>

        <div className="bottom-text__second-container">
          <div className="bottom-text__third-container">
            <p>Privacy</p>
            <p>|</p>
            <p>Terms</p>
          </div>

          <p>English &#x25BC;</p>
        </div>

      </div>
    </div>
  )
}

export default LoginMain;
