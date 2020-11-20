import express from "express";

import {
  studentTracker,
  getStudentProfile
} from "./controllers";

const router = express.Router();

// localhost:3001/students
router.get("/tracker", studentTracker);
router.get("/profile/:profile_id", getStudentProfile);
router.post("/class_attendance", postClassAttendanceData);

export default router;
