import React from 'react';
import './App.css';

function App() {
  const handleAdminLogin = (e) => {
    e.preventDefault();
    alert('Admin login logic here');
    // Implement admin login logic here
  };

  const handleStudentLogin = (e) => {
    e.preventDefault();
    alert('Student login logic here');
    // Implement student login logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Faculty Feedback System Of 
          <br/>
          PARUL UNIVERSITY</h1>
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
