import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import { 
    issueCertificate,
    verifyCertificate,
    getAllCertificates,
    getMyCertificate,
    deleteCertificate,
    updateCertificate,
} from "../controllers/CertificateController.js";

const router = express.Router();

router.get("/my", protect, authorize("student"), getMyCertificate);

// Public routes
router.get("/:id", verifyCertificate);

// Protected routes

// Admin + Faculty + Student
router.get("/", protect, authorize("admin", "faculty", "student"), getAllCertificates);

// Admin + Faculty
router.post("/", protect, authorize("admin", "faculty"), issueCertificate);

// Admin only
router.delete("/:id", protect, authorize("admin"), deleteCertificate);

router.put("/:id", protect, authorize("admin"), updateCertificate);
 
export default router;