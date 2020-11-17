import express from "express";
import { login } from "./controllers";


const router = express.Router();
// localhost:3001/auth
router.post("/login", login);       

export default router;
