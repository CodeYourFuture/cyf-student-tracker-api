import express from "express";
import { getUser } from "./controllers";

const router = express.Router();
// localhost:3001/users
router.get("/:userId", getUser);

export default router;
