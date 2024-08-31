import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import StudentDashboard from './Components/StudentDashboard.jsx';
import AdminDashboard from './Components/AdminDashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/student-dashboard' element={<StudentDashboard/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
