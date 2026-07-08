import express from "express";
import { 
    issueCertificate,
    verifyCertificate,
    getAllCertificates,
    deleteCertificate,
    updateCertificate,

 } from "../controllers/certificateController.js";

const router = express.Router();

router.post("/", issueCertificate);

router.get("/:id", verifyCertificate);

router.get("/", getAllCertificates);

router.delete("/:id", deleteCertificate);

router.put("/:id", updateCertificate);

export default router;