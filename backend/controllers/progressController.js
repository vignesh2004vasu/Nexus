const Progress = require('../models/Progress');
const Project = require('../models/Project');

// Create or update progress
exports.updateProgress = async (req, res) => {
  try {
    const { candidateId, projectId, taskCompleted, totalTasks } = req.body;
    let progress = await Progress.findOne({ candidate: candidateId, project: projectId });

    if (!progress) {
      progress = new Progress({ candidate: candidateId, project: projectId, taskCompleted, totalTasks });
    } else {
      progress.taskCompleted = taskCompleted;
      progress.totalTasks = totalTasks;
    }

    progress.score = (taskCompleted / totalTasks) * 100;
    await progress.save();

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
