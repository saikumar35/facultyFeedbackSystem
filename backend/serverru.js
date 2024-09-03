const express =require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app=express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//mysql database connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Aashrith@2004',
    database:'ffeedbacksystem'
});
db.connect(err =>{
    if(err){
        console.log('could not connect to mysql...',err);
        return;
    }
    console.log('connected to mysql');

});
//api route to check credentials
app.post('/login',(req,res)=>{
    const {erp_no,password}=req.body;

    //check if the credentials belong to admin
    const adminQuery = 'SELECT *FROM admindetails WHERE erp_no=? AND password=?';
    db.query(adminQuery,[erp_no,password],(err,adminResults)=>{
        if(err){
            return res.status(500).json({message:'server error',error:err.message});

        }
        if(adminResults.length>0){
            return res.status(200).json({messaage:'Admin login successful',role:'admin'});

        }else{
            const studentQuery = 'SELECT * FROM studentdetails WHERE erp_no=? AND password=?';
            db.query(studentQuery,[erp_no,password],(err,studentResults)=>{
                if(err){
                    return res.status(500).json({message:'server error',error:err.message});

                }
                if(studentResults.length>0){
                    return res.status(200).json({message:'student login successful',role:'student'});

                }else{
                    return res.status(401).json({message:'invalid credentials'});
                }
            });
        };
    });
});
//api route to store the student feedback
app.post('/api/feedback',(req,res)=>{
    const {semester,division,faculty,feedback}=req.body;
    const query = 'INSERT INTO stufeedback (semester,division,faculty,feedback) values(?,?,?,?)';
    db.query(query,[semester,division,faculty,feedback],(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.json({message: 'Feedback submitted successfully',id:result.insertId});
    });
});


// //api route to get all users
// app.get('/users',(req,res)=>{
//     const sql = 'SELECT * FROM users';
//     db.query(sql,(err,results)=>{
//         if(err){
//             return res.status(500).json({error:err.message});
//         }
//         res.json(results);
//     });
// });




//api route to verify user credentials

// app.post('/users',(req,res)=>{
//     const{erp_no,password}=req.body;

//     const sql = 'SELECT * FROM users WHERE erp_no=? AND password=?';
//     db.query(sql,[erp_no,password],(err,results)=>{
//         if(err){
//             return res.status(500).json({error:err.message});
//         }
//         if(results.length>0){
//             //user found
//             res.status(200).json({message:'login successful',user:results[0]});

//         }else{
//             //no user found
//             res.status(401).json({message:'invalid credentials'});
//         }
//     });
// });



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});