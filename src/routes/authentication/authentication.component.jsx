import { Routes, Route } from "react-router-dom";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Routes>
        {/* Route for Sign In form */}
        <Route path="sign-in" element={<SignInForm />} />
        
        {/* Route for Sign Up form */}
        <Route path="sign-up" element={<SignUpForm />} />
      </Routes>
    </div>
  );
};

export default Authentication;
