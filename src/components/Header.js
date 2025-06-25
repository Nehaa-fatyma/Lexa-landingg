// src/components/Header.jsx
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <Navbar />
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
