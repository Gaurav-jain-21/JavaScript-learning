import express from "express";
const app = express();
// Router Params
app.get("/ecom/products/iphone/:model",(req,res)=>{
    res.send(req.params.model);
})
app.get("/product/order/:day/:month/:year",(req,res)=>{
    const {day,month,year}=req.params;
    res.send(`product was ordered on : ${day}/${month}/${year}`);
})

app.listen(8000,()=>console.log("server up"));