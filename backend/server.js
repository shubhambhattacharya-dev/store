//import express and create express app 
import express from 'express';

const app = express(); //create express app

//define a route for the home page
app.listen(5000,(req,res)=>{
    console.log("server started at https://localhost:5000") // server started at https://localhost:5000
});