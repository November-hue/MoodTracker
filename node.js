//server.js
const express = require('express');
const app = express();
const mongoose= require ('mangoose');
const cors= require ('cors');

app.use(cors());
app.use(express.json());

//MongoDB Model
mongoose.connect('mongodb://localhost:27017/moodtracker', { useNewUrlParser: true, useUnifiedTopology: true });
 const MoodSchema = new moongose.Schema({
    mood: String,
    note:String,
    date:{
        type: DataTransfer, default: Date.now}
    
 });

 const Mood= moongose.model('Mood', MoodSchema);

 //Routes

 app.post('/log', async(req, res) =>{
    const moodEntry = new Mood(req.body);
    await moodEntry.save();
    res.send({message:'Mood logged!'});

 });

 app.get('/enteries', async(req,res))=> {
    const entries =await Mood.find().sort ({date:-1});
    res.json(entries);
 });

 //start server

 app.listen(5000, () => {
    console.log('Backend running on port 5000');
 });