const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Registration form validator
export const registrationValidator = ({ email, password }, setErrors) => {
  // Validate userEmail
  if (!email.trim()) {
    setErrors((prevErrors) => {
      return { ...prevErrors, email: "Email is required" };
    });
  } else if (!email.match(emailRegex)) {
    setErrors((prevErrors) => {
      return { ...prevErrors, email: "Email is not valid" };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, email: "" };
    });
  }

  // Validate userPassword
  if (!password.trim()) {
    setErrors((prevErrors) => {
      return { ...prevErrors, password: "Password is required" };
    });
  } else if (password.trim().length < 8) {
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        password: "Password must be at least 8 character long",
      };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, password: "" };
    });
  }
};
