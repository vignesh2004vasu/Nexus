// Layout.js
import React, { useState } from "react";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="pt-16 px-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
