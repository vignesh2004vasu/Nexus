const Candidate = require('../models/Candidate');

// Get all candidates
exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
