import React, { useState } from 'react';
import { Component } from 'react';

import './StudentDashboard.css';

const StudentDashboard =()=> {
    return(
        <div className='body'>
            <header>
                <img src="../src/Assests/logo.png" alt="pu" />
                <div>
                <img src="../src/Assests/user.png" alt="user"  />
                <h3>Hi, Username!</h3>
                </div>

            </header>
            <nav>
                <div>
                    <label for="sem">Select Semester: </label>
                    <select name="sem" id="sem">
                        <option value="Sem1">Sem1</option>
                        <option value="Sem2">Sem2</option>
                        <option value="Sem3">Sem3</option>
                        <option value="Sem4">Sem4</option>
                        <option value="Sem5">Sem5</option>
                        <option value="Sem6">Sem6</option>
                        <option value="Sem7">Sem7</option>
                        <option value="Sem8">Sem8</option>
                    </select>
                    <label for="div">Select Division: </label>
                    <select name="div" id="div">
                        <option value="div1">div1</option>
                        <option value="div2">div2</option>
                        <option value="div3">div3</option>
                        <option value="div4">div4</option>
                        <option value="div5">div5</option>
                        <option value="div6">div6</option>
                        <option value="div7">div7</option>
                        <option value="div8">div8</option>
                        <option value="div9">div9</option>
                        <option value="div10">div10</option>
                        <option value="div11">div11</option>
                        <option value="div12">div12</option>
                        <option value="div13">div13</option>
                    </select>
                </div>
                <a href="#"><button>MY Feedbacks</button></a>
            </nav>
            <div className='new_fb_btn'>
                <button >New Feedback</button>

            </div>
            <section className="new_feedback" >
                <div className='faculty_div'>
                    <label for="faculty">Select faculty: </label>
                    <select name="faculty" id="faculty">
                      <option value="Faculty1">Divesh Hariyali</option>
                      <option value="Faculty2">Sai Kumar</option>
                      <option value="Faculty3">Aashrith</option>
                      <option value="Faculty4">Shiva Teja</option>
                      <option value="Faculty5">Rahul</option>
                      <option value="Faculty6">Vamshi</option>
                      <option value="Faculty7">Ganesh</option>
                      <option value="Faculty8">Ambi</option>
                    </select>
                </div>
                <div className="textsub">
                    <textarea id="inputBox" placeholder="Write Feedback..."></textarea>
                    <button className='textsub_btn' >Submit Feedback</button>
                </div>
        
            </section>
               
            
 

            
        </div>
            
    );
    
    
};
export default StudentDashboard;