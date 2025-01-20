import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  // Inline styles for buttons
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    transition: 'all 0.3s ease-in-out',
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50', // Green color
    color: '#fff',
  };

  const signInButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007BFF', // Blue color
    color: '#fff',
  };

  return (
    <div className="home-container">
      {/* Intro Section */}
      <div className="intro-section">
      <h1 className="app-title">Loan Calculator Application</h1>

        <p className="app-description">
          Welcome to LoanCalc, your ultimate platform for managing and calculating loan details. Whether you're planning a personal loan, mortgage, or auto loan, 
          LoanCalc helps you understand payment schedules, interest rates, and total repayment amounts. Simplify your financial planning with our user-friendly interface 
          and get precise calculations tailored to your loan terms and preferences.
</p>


        <div className="button-group">
          <Link 
            to='/auth/sign-up' 
            style={registerButtonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Register
          </Link>
          
          <Link 
            to='/auth/sign-in' 
            style={signInButtonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
          >
            Sign In
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
