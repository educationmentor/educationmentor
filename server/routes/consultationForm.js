import express from 'express';
import { createConsultationRequest, testGoogleSheetsConnection, setupGoogleSheetsHeaders } from '../controller/consultationForm.js';
const router = express.Router();

router.post('/request', createConsultationRequest);
router.get('/test-sheets', testGoogleSheetsConnection);
router.post('/setup-sheets', setupGoogleSheetsHeaders);

export default router;