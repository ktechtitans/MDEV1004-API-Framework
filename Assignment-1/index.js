//import express
const express = require('express');

//Initialize the express app
const app = express();

//Define a route
app.get('/',(req,res)=>{
    res.send('Welcome to the first program of node js express');
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});
