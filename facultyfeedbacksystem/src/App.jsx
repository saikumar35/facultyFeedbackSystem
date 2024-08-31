import React, { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
function App() {
  const navigate=useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate('/admin-dashboard');
    // Implement admin login logic here
  };
  const handleStudentLogin = (e) => {
    e.preventDefault();
    navigate('/student-dashboard')
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to College Portal</h1>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleAdminLogin}>
            <input type="text" placeholder="Admin Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login as Admin</button>
          </form>
        </div>

        <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleStudentLogin}>
            <input type="text" placeholder="Student ID" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login as Student</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
