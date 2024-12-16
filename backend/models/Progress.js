const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  taskCompleted: { type: Number, required: true },
  totalTasks: { type: Number, required: true },
  score: { type: Number },
});

module.exports = mongoose.model('Progress', progressSchema);
