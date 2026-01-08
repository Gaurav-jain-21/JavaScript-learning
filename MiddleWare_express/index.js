import express from "express";
import log from "./logindetials.js";
const app = express();
function userCredentials(req,res,next){
    console.log("username: (alex)");
    console.log("email: (alex@gmail.com)");
    console.log("password: (123123)");
    next();
}
app.get("/",userCredentials,(req,res)=>{
    res.send("<h2> hello admin</h2>");
});
app.get("/log",log,(req,res,next)=>{
    res.send("<h1>user entered sucessfully</h1>");
})
app.listen(8000, ()=>console.log("server log"));