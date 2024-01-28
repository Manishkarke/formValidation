import React from "react";
import { registrationValidator } from "./ErrorHandler";

function Register() {
  // Component form state states
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  // For Form validation
  const [isFormSubmitted, setFormSubmitted] = React.useState(false); // to check if submit button is clicked
  const [errors, setErrors] = React.useState({}); // to store error states
  let isFormValid = true; // to check if form is valid

  React.useEffect(() => {
    for (const error in errors) {
      if (errors[error]) {
        isFormValid = false; // if There is any error then
        break;
      }
    }
    console.log(
      "form submision values: " +
        isFormSubmitted +
        " is FormValid ? " +
        isFormValid
    );
  }, [errors, isFormValid, isFormSubmitted]);

  // State Handling functions
  const inputFieldChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  // Form submission handler function
  const formSubmitHandler = (e) => {
    e.preventDefault();

    registrationValidator(formData, setErrors); //Form Validator function
    setFormSubmitted(true);

    if (isFormValid && isFormSubmitted) {
      alert("Form submitted");
    } else if (isFormSubmitted) {
      setFormSubmitted(false);
    }
  };

  return (
    <div className="main-box">
      <h2>Register new account</h2>

      <form method="POST" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="email">Email address</label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={inputFieldChangeHandler}
              autoComplete="email"
            />
          </div>
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password">Password</label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={inputFieldChangeHandler}
              autoComplete="current-password"
            />
          </div>
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button type="submit">sign up</button>
      </form>
    </div>
  );
}

export default Register;
