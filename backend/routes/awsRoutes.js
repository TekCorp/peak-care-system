import express from 'express';
const router= express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { addNewFileToAWS, getAllBackupFiles } from '../controllers/fileUploaderControlller.js';


router.route('/get_files').get(protect, getAllBackupFiles)
router.route('/upload_files').post(protect, addNewFileToAWS)

export default router; 