
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


// Define a simple schema and model
const FeedbackSchema = new mongoose.Schema({
    username: {type: Number, required: true, unique: true},
    password: {type: String, required: true},
});

const LoginDetails = mongoose.model('LoginDetails', FeedbackSchema);

const fbSchema = new mongoose.Schema({
    feedback:{
        type: String,
        required:true
    },
    semester:{
        type: String,
        required: true,
    },
    division:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    
}, {collection:'feedback_student'});
const feedback_student= mongoose.model("feedback_student",fbSchema)
//api routes
app.post('/api/login',async (req,res)=>{
    const {username,password}=req.body;

    try{
        const user = await LoginDetails.findOne({username,password});
        if(user){
            return res.status(200).json({message: 'Login successful'});
        }else{
            return res.status(401).json({message: 'Invalid credentials'});
        }
    }catch(err){
        console.error('Error during login: ',err.message);
        res.status(500).json({message: 'server error'});
    }
});


app.post('/feedback',async(req,res)=>{
    const{feedback,semester,division,faculty}=req.body;
    console.log('recieved feedback: ',req.body);
    if (!feedback) {    
        console.error('No feedback provided');
        return res.status(400).json({ message: "No feedback provided" });
    }
    try {
        const newfb = new feedback_student({feedback,semester,division,faculty});
        await newfb.save();
        res.status(201).json({message: "feedback successfully submitted"});

    } catch (err) {
        res.status(500).json({message: "failed to submit feedback",error:err});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

