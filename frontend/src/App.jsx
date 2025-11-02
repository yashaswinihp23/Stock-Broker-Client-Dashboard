import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsRegistering(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (isRegistering) {
    return <Register onRegister={handleRegister} />;
  }

  return (
    <div className="app-container">
      <h1>Stock Broker Client Dashboard</h1>
      <div className="auth-buttons">
        <button onClick={() => setIsRegistering(false)}>Login</button>
        <button onClick={() => setIsRegistering(true)}>Register</button>
      </div>
      {!isRegistering ? <Login onLogin={handleLogin} /> : <Register onRegister={handleRegister} />}
    </div>
  );
}

export default App;
