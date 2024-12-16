const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  assignedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

module.exports = mongoose.model('Candidate', candidateSchema);
