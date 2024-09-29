//import express
const express = require('express');
const bodyParser = require('body-parser');

//Initialize the express app
const app = express();

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
