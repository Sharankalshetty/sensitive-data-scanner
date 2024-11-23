const Scan = require("../models/scan.js");

exports.uploadFile = async (req, res) => {
  const { filename, fileContent } = req.body;

  // Dummy logic to classify sensitive data
  const results = {};
  const PAN_REGEX = /[A-Z]{5}[0-9]{4}[A-Z]/g;
  results.PAN = fileContent.match(PAN_REGEX) || [];

  const scan = new Scan({ filename, results });
  await scan.save();

  res.status(200).json(scan);
};

exports.getAllScans = async (req, res) => {
  const scans = await Scan.find();
  res.status(200).json(scans);
};

exports.deleteScan = async (req, res) => {
  const { id } = req.params;
  await Scan.findByIdAndDelete(id);
  res.status(200).json({ message: "Scan deleted successfully" });
};