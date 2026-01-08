import express from "express";
const app=express()
//Query String 
app.get("/product",(req,res)=>{
    // res.send(`Response ok ${req.query.category}`);
    const {category, id}=req.query;
    res.send(`product category: ${category} and the id: ${id}`);
})
app.listen(8000,()=>console.log("Server Up"));