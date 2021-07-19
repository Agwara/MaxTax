import React, {useState, useEffect, useReducer} from "react";
import {useHistory} from "react-router-dom";
import formReducer from "../../formReducer/formReducer";
import "./LoginForm.css"

const initialState = {
  isEmailValid: false,
  isPasswordValid: false,
  isAllInputValid: false,
  emailError: "",
  passwordError: ""
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "INITIALIZE_STATE",
      payload: initialState
    })
  }, [])

  const validateEmail = () => {
    dispatch({
      type: "VALIDATE_EMAIL",
      payload: {email}
    })
  }

  const validatePassword = () => {
    dispatch({
      type: "VALIDATE_PASSWORD",
      payload: {password}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formState.isAllInputValid) {
      history.push("/dashboard/main");
    }
  }

  return (
    <div className="login-form">
      <h3 className="login-form__header">Sign in to continue to<br /> your account.</h3>

      <div className={(formState.emailError || formState.passwordError) ? "login-form__error" : "hide-form__error"}>
        {formState.emailError && <p>{formState.emailError}</p>}
        {formState.passwordError && <p>{formState.passwordError}</p>}
      </div>

      <form noValidate autoComplete="off" className="login-form__container">
        <div className="login-form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            autoComplete="off"
          />
        </div>

        <div className="login-form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter a strong password"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            autoComplete="off"
          />
        </div>

        <button 
          disabled={!formState.isAllInputValid} 
          className={formState.isAllInputValid ? "login-form__btn" : "diabled-login__btn"} 
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>

    
    </div>
  )
}

export default LoginForm;