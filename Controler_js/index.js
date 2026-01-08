import express from "express";
import students from "./students.js";
const app=express();
app.use("/studends",students);
app.listen(8000,()=>console.log("server up"));