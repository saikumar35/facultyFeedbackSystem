import React, { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function App() {
  const navigate=useNavigate();
  const [adminId, setAdminId]=useState('');
  const [adminPassword, setAdminPassword]=useState('');
  const [studentId, setStudentId]=useState('');
  const [studentPassword, setStudentPassword]=useState('');
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login',{
        username: adminId,
        password: adminPassword
      });
      if(response.status===200){
        navigate('/admin-dashboard');
      }
    } catch (err) {
      alert('admin login failed: '+ err.response.data.message);
    }
    // Implement admin login logic here
  };
  const handleStudentLogin = async(e) => {
    e.preventDefault();
    // navigate('/student-dashboard')
    try {
      const response = await axios.post('http://localhost:5000/api/login',{
        username: studentId,
        password: studentPassword
      });
      if(response.status===200){
        navigate('/student-dashboard');
      }
    } catch (err) {
      alert('student login failed: '+err.response.data.message);
    }
    
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
            <input type="text" placeholder="Admin Username" value={adminId} onChange={(e) => setAdminId(e.target.value)} required />
            <input type="password" placeholder="Password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />
            <button type="submit">Login as Admin</button>
          </form>
        </div>

        <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleStudentLogin}>
            <input type="text" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
            <input type="password" placeholder="Password" value={studentPassword} onChange={(e) => setStudentPassword(e.target.value)} required />
            <button type="submit">Login as Student</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
