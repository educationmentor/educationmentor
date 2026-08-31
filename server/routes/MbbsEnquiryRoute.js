import express from "express";
import { createMbbsEnquiry } from "../controller/MbbsEnquiry.js";

const router = express.Router();

// POST /api/enquiry
router.post("/", createMbbsEnquiry);

export default router;