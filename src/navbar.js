// src/navbar.js
import React, { useState } from 'react';
import './navbar.css';

const NavBar = ({ setSection }) => {
  const [showAuthCard, setShowAuthCard] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Register the user
      setIsRegistered(true);
      alert('Registration successful! You can now log in.');
    } else {
      // Log in if registered
      if (isRegistered) {
        setLoggedInUser(userInfo.username);
        alert(`${userInfo.username} logged in successfully`);
      } else {
        alert('Please register first');
      }
    }
    setShowAuthCard(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    alert('Logged out successfully');
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>Pet Heaven</h2>
        </div>
        <div className="navbar-links">
          <button onClick={() => setSection("home")}>Home</button>
          <button onClick={() => setSection("about")}>About Us</button>
          <button onClick={() => setSection("pets")}>View Pets</button>
          <button onClick={() => setSection("services")}>Services</button>
          <button onClick={() => setSection("contact")}>Contact</button>
          <button onClick={() => setSection("donate")}>Donate</button> {/* Add Donate button */}
        </div>
        <div className="navbar-login">
          {loggedInUser ? (
            <div className="user-info">
              <span className="username-display"><b>{loggedInUser}</b></span>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
          ) : (
            <button onClick={() => { setShowAuthCard(true); setIsSignUp(false); }} className="login-button">Login</button>
          )}
        </div>
      </nav>

      {/* Login/Signup Modal */}
      {showAuthCard && (
        <div className="auth-card">
          <button className="close-button" onClick={() => setShowAuthCard(false)}>×</button>
          <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <br></br>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>
          <p onClick={toggleForm} className="toggle-form">
            {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </p>
        </div>
      )}
    </>
  );
};

export default NavBar;
