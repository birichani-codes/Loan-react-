import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  username: "",
  middleName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, username, middleName, email, phoneNumber, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  // useNavigate hook for redirecting
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { firstName, lastName, username, middleName, phoneNumber });
      resetFormFields();
      setCurrentUser(user);
      alert("Registration complete! Redirecting to Sign In...");

      // Redirect to Sign In page after successful registration
      navigate('/auth/sign-in');
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="auth-container">
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="First Name"
            type="text"
            required
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />

          <FormInput
            label="Last Name"
            type="text"
            required
            onChange={handleChange}
            name="lastName"
            value={lastName}
          />

          <FormInput
            label="Username"
            type="text"
            required
            onChange={handleChange}
            name="username"
            value={username}
          />

          <FormInput
            label="Middle Name"
            type="text"
            required
            onChange={handleChange}
            name="middleName"
            value={middleName}
          />

          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Phone Number"
            type="tel"
            required
            onChange={handleChange}
            name="phoneNumber"
            value={phoneNumber}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
