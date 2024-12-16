import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching project details from the backend
    // This will be replaced with an actual API call later
    const fetchProjectDetails = () => {
      const staticProjectData = {
        id: 1,
        name: "Project Alpha",
        description:
          "Project Alpha is a cutting-edge application designed to optimize user engagement and streamline workflows. It integrates advanced analytics with intuitive interfaces to enhance the overall experience.",
        status: "In Progress",
        startDate: "2024-01-10",
        dueDate: "2025-01-10",
        teamMembers: [
          { name: "John Doe", role: "Project Manager" },
          { name: "Jane Smith", role: "Lead Developer" },
          { name: "Mike Johnson", role: "Designer" },
        ],
      };

      setProject(staticProjectData);
    };

    fetchProjectDetails();
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/home")}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Back to Projects
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          {project.name}
        </h1>
        <p className="text-gray-600 mt-2">{project.description}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Project Details
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Status:</span>
              <span className="text-gray-600">{project.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Start Date:</span>
              <span className="text-gray-600">{project.startDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Due Date:</span>
              <span className="text-gray-600">{project.dueDate}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
          <ul className="mt-4">
            {project.teamMembers.map((member, index) => (
              <li key={index} className="flex justify-between text-gray-600">
                <span>{member.name}</span>
                <span className="text-gray-500">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
