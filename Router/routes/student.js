import express from "express";
const router=express.Router()
router.get("/all",(req,res)=>{
    res.send("All student");
});
router.post("/create",(req,res)=>{
    res.send("sign in new student");
});
router.put("/update",(req,res)=>{
    res.send("edite student");
});
router.delete("/delete",(req,res)=>{
    res.send("delete the student");
});
export default router;
