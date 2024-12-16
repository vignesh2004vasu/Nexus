// SideBar.js
import React from "react";
import { Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <ul>
          <li>
            <Link
              to="/home"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
            >
              <Calendar className="h-5 w-5" />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/assignments"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
            >
              <Users className="h-5 w-5" />
              <span>Assignments</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
