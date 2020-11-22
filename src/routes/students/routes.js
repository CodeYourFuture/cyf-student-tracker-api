import express from "express";

import {
  studentTracker,
  getStudentProfile,
  postClassAttendanceData,
  postPdSkills,
  postStudentEduHomework
} from "./controllers";

const router = express.Router();

// localhost:3001/students
router.get("/tracker", studentTracker);
router.get("/profile/:profile_id", getStudentProfile);
router.post("/class_attendance", postClassAttendanceData);
router.post("/pd_skills", postPdSkills);
router.post("/edu_homework", postStudentEduHomework);


export default router;
