import express from "express";
const allTeacher=(req, res)=>{
    res.send("All teacher");
};
const newTeacher=(req,res)=>{
    res.send("create new teacher");
};
const editTeacher=(req,res)=>{
    res.send("Edit the teacher");
};
const deleteTeacher=(req,res)=>{
    res.send("delete the teacher");
};
export {allTeacher,newTeacher,editTeacher,deleteTeacher};