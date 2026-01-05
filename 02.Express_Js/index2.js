import express from "express";
const app= express();
app.get(/x/, (req,res)=>{
    res.send("if the path includes the letters (x) it will work.");
});
app.listen(8000,()=>console.log("server up"));