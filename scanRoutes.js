const express = require("express");
const { uploadFile, getAllScans, deleteScan } = require("../Controllers/scanControllers.js");

const router = express.Router();

router.post("/upload", uploadFile);
router.get("/files", getAllScans);
router.delete("/files/:id", deleteScan);

module.exports = router;