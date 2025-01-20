import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importing the necessary components
import { UserContext } from "./contexts/user.context";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";  // Import SignInForm
import SignUpForm from "./components/sign-up-form/sign-up-form.component";  // Import SignUpForm

const Loan = () => {
  return <h1>Loan Application</h1>;
};

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
     // <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        

        {/* Authentication Route */}
        <Route
          path="auth"
          element={currentUser ? <Navigate to="/" replace /> : <Authentication />}
        >
          <Route path="sign-in" element={<SignInForm />} /> {/* Sign-in route */}
          <Route path="sign-up" element={<SignUpForm />} /> {/* Sign-up route */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
