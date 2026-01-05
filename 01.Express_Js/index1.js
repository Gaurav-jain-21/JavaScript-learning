//create a folder
//npm init -y
//npm i express
//create instance express
//provide port : 8000
//Basic Route/

import express from 'express';
const app= express();
//first app
app.get("/",(req,res)=>{
    res.send("welcome to express.js");
})
app.listen(8000, ()=>console.log("server up!"));