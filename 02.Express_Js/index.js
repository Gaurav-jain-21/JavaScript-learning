import express from "express";
const app=express();
app.get("/ab",(req,res)=>{
//String pattern path
    res.send("If the user hit (acd) or (abcd) then this will run ."); 
});
app.listen(8000,()=>console.log("server up"));