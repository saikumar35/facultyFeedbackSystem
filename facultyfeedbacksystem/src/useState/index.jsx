import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [semester, setSemester] = useState('');
  const [division, setDivision] = useState('');
  const [feedback, setFeedback] = useState({
    architecture: '',
    education: '',
    security: '',
    facilities: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSemesterDivisionSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted successfully!');
    console.log(feedback);
    // Implement logic to save feedback to a backend or database here.
  };

  return (
    <div className="App">
      {step === 1 && (
        <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Student ID" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="semester-division-box">
          <h2>Select Semester and Division</h2>
          <form onSubmit={handleSemesterDivisionSubmit}>
            <select value={semester} onChange={e => setSemester(e.target.value)} required>
              <option value="" disabled>Select Semester</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
              <option value="Semester 4">Semester 4</option>
              <option value="Semester 5">Semester 5</option>
              <option value="Semester 6">Semester 6</option>
              <option value="Semester 7">Semester 7</option>
              <option value="Semester 8">Semester 8</option>
            </select>
            <select value={division} onChange={e => setDivision(e.target.value)} required>
              <option value="" disabled>Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <button type="submit">Proceed</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="feedback-box">
          <h2>Provide Feedback</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <label>Architecture</label>
            <textarea name="architecture" value={feedback.architecture} onChange={handleFeedbackChange} required />

            <label>Education</label>
            <textarea name="education" value={feedback.education} onChange={handleFeedbackChange} required />

            <label>Security</label>
            <textarea name="security" value={feedback.security} onChange={handleFeedbackChange} required />

            <label>Facilities</label>
            <textarea name="facilities" value={feedback.facilities} onChange={handleFeedbackChange} required />

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
