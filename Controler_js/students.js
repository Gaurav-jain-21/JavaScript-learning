import express from "express";
import {allTeacher,newTeacher,editTeacher,deleteTeacher} from "./controllers/teacher.js";

const router=express.Router();

router.get("/all",allTeacher);
router.post("/add",newTeacher);
router.put("/edit",editTeacher);
router.delete("/remove",deleteTeacher);

export default router;