const Project = require('../models/Project');
const Candidate = require('../models/Candidate');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newProject = new Project({ title, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Assign a candidate to a project
exports.assignCandidateToProject = async (req, res) => {
  try {
    const { projectId, candidateId } = req.body;
    const project = await Project.findById(projectId);
    const candidate = await Candidate.findById(candidateId);
    
    if (!project || !candidate) return res.status(404).json({ message: 'Project or Candidate not found' });

    project.candidateAssigned = candidateId;
    candidate.assignedProjects.push(projectId);

    await project.save();
    await candidate.save();

    res.status(200).json({ message: 'Candidate assigned to project successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
