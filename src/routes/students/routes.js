import express from "express";
import {
  studentTracker
} from "./controllers";

const router = express.Router();

// localhost:3001/students
router.get("/tracker", studentTracker);

export default router;
