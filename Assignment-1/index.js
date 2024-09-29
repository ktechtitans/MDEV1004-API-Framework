//import 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Initialize the express app
const app = express();

//MongoDb Atlas connection string
const mongoURI = 'mongodb+srv://Kanchan:Kanchan@cluster0.v3lhx.mongodb.net/';

//connect to mongodb Atlas
mongoose.connect(mongoURI,{
})
.then(()=>{
    console.log('Connected to mongodb');
})
.catch((error)=>{
    console.error('Error connecting to mongoDB',error);
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Define a root route
app.get('/',(req, res)=>{
    res.send('Welcome to the first program of node js express');
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});
