import React from 'react';
import './AdminDashboard.css'
const AdminDashboard = () =>{
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
                <a href="#"><button>MY Feedbacks</button></a>
            </nav>
            <section className='main_body'>
                
                <div className="recent_feedback">
                    <p>Here are the recent Feedbacks</p>
                    <form>
                        <h4>Feedback from sem 1 and div 1 student:</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores error minus repudiandae 
                        nihil nesciunt doloribus illum veniam.... </p>
                        <span><button>Open</button></span>
                    </form>
                    
                    <form>
                        <h4>Feedback from sem 1 and div 1 student:</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores error minus repudiandae 
                        nihil nesciunt doloribus illum veniam.... </p>
                        <span><button>Open</button></span>
                    </form>
                    
                    <form>
                        <h4>Feedback from sem 1 and div 1 student:</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores error minus repudiandae 
                        nihil nesciunt doloribus illum veniam.... </p>
                        <span><button>Open</button></span>
                    </form>
                    <span><a href="#">See More....</a></span>
                    
                    
                    
                </div>
                <div className="give_feedback">
                    <div className='new_fb_btn'>
                        <button >New Feedback</button>

                    </div>
                    <section className="new_feedback" >
                        <div className='faculty_div'>
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
                        <div className="textsub">
                            <textarea id="inputBox" placeholder="Write Feedback..."></textarea>
                            <button className='textsub_btn' >Submit Feedback</button>
                        </div>

                    </section>
                </div>
            </section>
        </div>
    );
};
export default AdminDashboard;