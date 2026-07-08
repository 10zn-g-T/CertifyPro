import Certificate from "../models/Certificate.js";

export const issueCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.create(req.body);

    res.status(201).json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const verifyCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findOne({
      certificateId: req.params.id,
    });

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate Not Found",
      });
    }

    res.status(200).json({
      success: true,
      certificate,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: certificates.length,
      certificates,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate Not Found",
      });
    }

    await certificate.deleteOne();

    res.status(200).json({
      success: true,
      message: "Certificate Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate Not Found",
      });
    }

    res.status(200).json({
      success: true,
      certificate,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};