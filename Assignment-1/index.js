//import express
const express = require('express');

//Initialize the express app
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log('Server is running on http://localhost:${port}')
});
