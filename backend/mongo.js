const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
.then(()=>{
    console.log('connected');
})
.catch(()=>{
    console.log('failed');
})
const fbSchema = new mongoose.Schema({
    fb:{
        type: String,
        required:true
    }
})
const student_feedb= mongoose.model("student_feedb",fbSchema)

app.post('/feedback',async(req,res)=>{
    console.log('recieved feedback: ',req.body);
    const{feedback}=req.body;
    try {
        const newfb = new student_feedb({feedback});
        await newfb.save();
        res.status(201).json({message: "feedback successfully submitted"});

    } catch (err) {
        res.status(500).json({message: "failed to submit feedback",error:err});
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
