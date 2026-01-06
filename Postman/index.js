import express from "express";
const app=express();
//ugly code
app.get("/student",(req,res)=>{
    res.send("all students");
});
app.post('/student',(req,res)=>{
    res.send("Add new Student");
});
app.put("/student",(req,res)=>{
    res.send("Update student");
});
app.delete("/student",(req,res)=>{
    res.send("Delete student");
})
app.listen(8000,()=>console.log("server up"));