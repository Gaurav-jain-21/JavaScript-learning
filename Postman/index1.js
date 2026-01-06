import express from "express";
const app=express();
app
.route("/student")
.get((req,res)=>res.send("all the student"))
.post((req,res)=>res.send("Add new student"))
.put((req,res)=>res.send("update student"))
.delete((req,res)=>res.send("delete student"));

app.listen(8000,()=> console.log("server up"));