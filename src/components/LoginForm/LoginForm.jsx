import React, {useEffect, useReducer} from "react";
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
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "INITIALIZE_STATE",
      payload: initialState
    })
  }, [])

  const validateEmail = (email) => {
    dispatch({
      type: "VALIDATE_EMAIL",
      payload: {email}
    })
  }

  const validatePassword = (password) => {
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
            onChange={(e) => validateEmail(e.target.value)}
            onBlur={(e) => validateEmail(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="login-form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter a strong password"
            onChange={(e) => validatePassword(e.target.value)}
            onBlur={(e) => validatePassword(e.target.value)}
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