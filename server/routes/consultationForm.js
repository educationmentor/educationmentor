import express from 'express';
import { createConsultationRequest } from '../controller/consultationForm.js';
const router = express.Router();

router.post('/request', createConsultationRequest); 


export default router;