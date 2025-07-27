import express from 'express';
import { sendMailController } from '../controllers/mail.js';

const router = express.Router();

router.post('/send-mail', sendMailController)

export default router;