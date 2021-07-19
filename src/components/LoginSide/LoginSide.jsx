import React from "react";
import "./LoginSide.css"

import undrawStar from "../../assets/undraw_To_the_stars_qhyy.svg"

const LoginSide = () => {
  return (
    <div className="login-side">
      <div className="login-side__main">
        <h2>Welcome to Star Wars <br/>the Clone Wars</h2>
        <img
          alt=""
          src={undrawStar} 
          width="100%"
        />
      </div>

      <div className="login-side__bottom-black"></div>
    </div>
  )
}

export default LoginSide;
