require('dotenv').config();
const express = require("express")
const port = 3000;
const app = express()
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${port}`);
})

