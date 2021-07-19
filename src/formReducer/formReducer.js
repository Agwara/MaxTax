export default function formReducer(state={}, action) {
  switch (action.type) {
    case "INITIALIZE_STATE": 
      return {
        ...state,
        ...action.payload
      }

    case "VALIDATE_EMAIL":
      let mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isEmailValid = mailFormat.test(action.payload.email);
      let isAllInputValidFromEmail = state.isPasswordValid ? true : false;

      if (isEmailValid) {
        return {
          ...state,
          emailError: "",
          isAllInputValid: isAllInputValidFromEmail,
          isEmailValid,
        } 
      } else {
        return {
          ...state,
          emailError: "Enter a valid email address.",
          isAllInputValid: false,
          isEmailValid
        }
      }

    case "VALIDATE_PASSWORD":
      let passwordFormat = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
      let isPasswordValid = passwordFormat.test(action.payload.password);
      let isAllInputValidFromPassword = state.isEmailValid ? true : false;

      if (isPasswordValid) {
        return {
          ...state,
          passwordError: "",
          isAllInputValid: isAllInputValidFromPassword,
          isPasswordValid
        }
      } else {
        return {
          ...state,
          passwordError: "The password must be a combination of letters and numbers, and must be at least 8 characters",
          isAllInputValid: false,
          isPasswordValid
        }
      }

     default: 
      return state; 
  }
}