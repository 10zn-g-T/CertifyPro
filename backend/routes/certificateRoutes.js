import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import { 
    issueCertificate,
    verifyCertificate,
    getAllCertificates,
    deleteCertificate,
    updateCertificate,
} from "../controllers/certificateController.js";

const router = express.Router();

// Public routes
router.get("/:id", verifyCertificate);

// Protected routes
// Admin + Faculty
router.post("/", protect, authorize("admin", "faculty"), issueCertificate);

router.get("/", protect, authorize("admin", "faculty"), getAllCertificates);

// Admin only
router.delete("/:id", protect, authorize("admin"), deleteCertificate);

router.put("/:id", protect, authorize("admin"), updateCertificate);
 
export default router;