import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importing the necessary components
import { UserContext } from "./contexts/user.context";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";

//import LoanCalculator from "./components/components/LoanCalculator.compo";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Loan Application</h1>} />

        {/* Authentication Route */}
        <Route
          path="auth"
          element={currentUser ? <Navigate to="/loan-form" replace /> : <Authentication />}
        >
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
        </Route>

        {/* Loan Form Route */}
        <Route path="loan-form" element={currentUser ? <LoanCalculator /> : <Navigate to="/auth" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
