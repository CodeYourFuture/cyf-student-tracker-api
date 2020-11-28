import express from "express";

import {
  studentTracker,
  getStudentProfile,
  postClassAttendanceData,
  getClassAttendanceData,
  postPdSkills,
  getUpdatedStudentProfile,
  getStudentEduHomework,
  postEduHomework, 
  getPdSkills
} from "./controllers";

const router = express.Router();

// localhost:3001/students
router.get("/tracker", studentTracker);
router.get("/profile/:profile_id", getStudentProfile);
router.get("/Class-Attendance", getClassAttendanceData);
router.post("/Class-Attendance", postClassAttendanceData);
router.get("/PD-Skills", getPdSkills);
router.post("/PD-Skills", postPdSkills);
router.get("/student_data", getUpdatedStudentProfile);
router.get("/Edu-Homework", getStudentEduHomework);
router.post("/Edu-Homework", postEduHomework);



export default router;

