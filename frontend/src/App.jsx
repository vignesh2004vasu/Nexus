import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/admin/Home";
import AssignmentDashboard from "./Pages/user/AssignmentDashboard";
import Layout from "./Pages/user/Layout";
// Authentication state
let isAuthenticated = false;

const login = () => {
  isAuthenticated = true; // Simulates login
};

const logout = () => {
  isAuthenticated = false; // Simulates logout
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login login={login} />} />

        {/* Protected Route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home logout={logout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assignment"
          element={
            <ProtectedRoute>
              <Layout>
                <AssignmentDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Redirect for undefined routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
