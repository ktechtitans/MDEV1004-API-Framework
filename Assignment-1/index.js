//import 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Initialize the express app
const app = express();

//MongoDb Atlas connection string
const mongoURI = 'mongodb+srv://KaurKanchan:mongodb@cluster0.v3lhx.mongodb.net/';

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
