import express from 'express';
import { submitCareerApplication, upload } from '../controllers/careerController.js';

const router = express.Router();

// Route for submitting career application
router.post('/submit', upload.single('resume'), submitCareerApplication);

export default router;