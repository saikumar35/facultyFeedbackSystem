import React, { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function App() {
  const navigate=useNavigate();
  const [erpNo,setErpNo]=useState('');
  const [password,setPassword]=useState('');
  // const [adminId, setAdminId]=useState('');
  // const [adminPassword, setAdminPassword]=useState('');
  // const [studentId, setStudentId]=useState('');
  // const [studentPassword, setStudentPassword]=useState('');
  const handleLogin = async (e)=>{
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:5000/login',{
        erp_no:erpNo,
        password:password,
      });
      if(response.status===200){
        const{role}=response.data;
        if(role==='admin'){
          navigate('/admin-dashboard');
        }else if(role === 'student'){
          navigate('/student-dashboard');
        }
      }
    } catch (err) {
        alert('Login failed: '+(err.response ? err.response.data.message : err.message));
    }
  }

  // const handleAdminLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5000/users',{
  //       erp_no: adminId,
  //       password: adminPassword,

  //     });
  //     if(response.status===200){
  //       navigate('/admin-dashboard');
  //     }
  //   } catch (err) {
  //     alert('admin login failed: '+ err.response.data.message);
  //   }
  //   // Implement admin login logic here
  // };
  // const handleStudentLogin = async(e) => {
  //   e.preventDefault();
  //   // navigate('/student-dashboard')
  //   try {
  //     const response = await axios.post('http://localhost:5000/users',{
  //       erp_no: studentId,
  //       password: studentPassword,
  //     });
  //     if(response.status===200){
  //       navigate('/student-dashboard');
  //     }
  //   } catch (err) {
  //     alert('student login failed: '+err.response.data.message);
  //   }
    
  // };


  return (
    <div className="App">
      <header className="App-header">
        
        <img src="../src/Assests/logo.png" alt="pu logo" />
        <a href="https://paruluniversity.ac.in/"><button >Visit college Website</button></a>

      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="enter erp no" value={erpNo} onChange={(e) => setErpNo(e.target.value)} required />
            <input type="password" placeholder="enter the password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            
            <button type="submit" >Login</button>
          </form>
        </div>

        {/* <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleStudentLogin}>
            <input type="text" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
            <input type="password" placeholder="Password" value={studentPassword} onChange={(e) => setStudentPassword(e.target.value)} required />
            <button type="submit">Login as Student</button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default App;
