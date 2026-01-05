import express from "express";
const app=express();
app.get("/product/iphone",(req,res)=>{
    res.send("this code will only run if you provide /product/iphone");

});
app.listen(8000,()=>console.log("server up"));