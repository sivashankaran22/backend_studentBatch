import express from "express";
import {PutStudent, getMatch, postMentor, postStudent } from "../Controlers/profile.js";
import { client } from "../db.js";

const router = express.Router(); 

// adding students

router.post("/student/add", async(req,res)=>{
    try {
        const newStudentName = req.body;
        if(!newStudentName){
            return res.status(400).json({message:"No data"});
        }
        const result = await postStudent(newStudentName);
        if(!result){
            return res.status(400).json({message:"Error posting data"});
        }
        res.status(201).json({data:result})
    } catch (error) {
        res.status(500).json({message:"Internal Error"});
    }
})

// add mentor

router.post("/mentor/add", async(req,res)=>{
    try {
        const newMentorName = req.body;
        if(!newMentorName){
            return res.status(400).json({message:"No data"});
        }
        const result1 = await postMentor(newMentorName);
        if(!result1){
            return res.status(400).json({message:"Error posting data"});
        }
        res.status(201).json({data:result1})
    } catch (error) {
        res.status(500).json({message:"Internal Error"});
    }
})

// match the student and mentor

router.get("/groupdeatils", async(req,res)=>{
    try {
                const newMatchDetails = await getMatch(req);
                if(!newMatchDetails){
                    return res.status(400).json({message:"No data"});
                }
                res.status(200).json({data:newMatchDetails});    
            } catch (error) {
                res.status(500).json({message:"Internal Error"});
            }
})

// Student Update

router.put("/student/:name", async(req,res)=>{
        try {
            
            const curentStudent = req.params.name;
            const updateStudent = req.body;
            if(!curentStudent){
                return res.status(400).json({message:"No data"});
            }
            const result3 = await PutStudent(curentStudent,updateStudent);
            if(!result3){
                return res.status(400).json({message:"Error posting data"});
            }
            res.status(201).json({data:result3})
        } catch (error) {
            res.status(500).json({message:"Internal Error"});
        }
})
export const studentRoute = router;