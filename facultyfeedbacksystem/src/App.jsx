import React, { useState } from 'react';
import './App.css';

function App() {
  const handleAdminLogin = (e) => {
    e.preventDefault();
    alert('Admin login logic here');
    // Implement admin login logic here
  };

  const [loginId, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleStudentLogin = (e) => {
    e.preventDefault();
    alert('Student login logic here');
    
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
            <input type="text" placeholder="Student ID" required onChange={e=> setId(e.target.value)}/>
            <input type="password" placeholder="Password" required onChange={e=> setPassword(e.target.value)}/>
            <button type="submit">Login as Student</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
