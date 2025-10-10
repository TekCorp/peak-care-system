import express from "express";
import { createZohoLead, getZohoAuth, handleZohoCallback } from "../controllers/zohoControllers";

const router = express.Router();

router.get("/zoho/auth", getZohoAuth);
router.get("/zoho/callback", handleZohoCallback);
router.post("/zoho/createLead", createZohoLead);

export default router;