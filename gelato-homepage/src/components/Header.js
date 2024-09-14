import React, { useState } from "react";
import {
  FaBars,
  FaShoppingCart,
  FaUser,
  FaTimes,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000, // Ensures header stays above everything
    position: "relative",
  };

  const headerLeftStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menuIconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    marginRight: "10px",
    zIndex: 1100, // Higher than the header
  };

  const logoStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const headerRightStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    marginRight: "20px",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "1.2rem",
    marginRight: "5px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 600,
  };

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isSidebarOpen ? "0" : "-100%",
    width: "250px",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
    transition: "left 0.3s ease",
    padding: "20px",
    zIndex: 1100, // Above everything
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1000, // Below the sidebar but above content
    display: isSidebarOpen ? "block" : "none",
  };

  const closeIconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    marginBottom: "20px",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const liStyle = {
    marginBottom: "20px",
    cursor: "pointer",
    fontWeight: 400,
  };

  return (
    <React.Fragment>
      {/* Header/Navbar */}
      <header style={headerStyle}>
        <div style={headerLeftStyle}>
          {/* Ensure FaBars is visible */}
          <FaBars style={menuIconStyle} onClick={toggleSidebar} />
          <div style={logoStyle}>
            <span>Gelato</span>
          </div>
        </div>
        <div style={headerRightStyle}>
          <div style={linkStyle}>
            <FaPhoneAlt style={iconStyle} /> Contact us
          </div>
          <div style={linkStyle}>
            <FaShoppingCart style={iconStyle} />
          </div>
          <div style={linkStyle}>
            <FaGlobe style={iconStyle} /> EN/EUR
          </div>
          <div style={linkStyle}>
            <FaUser style={iconStyle} /> Sign In
          </div>
          <button style={buttonStyle}>Sign up for free</button>
        </div>
      </header>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <FaTimes style={closeIconStyle} onClick={toggleSidebar} />
        <div>
          <button style={buttonStyle}>Sign up for free</button>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              cursor: "pointer",
              fontWeight: 400,
            }}
          >
            Sign in
          </div>
          <ul style={ulStyle}>
            <li style={liStyle}>Products</li>
            <li style={liStyle}>Start selling</li>
            <li style={liStyle}>Tools and apps</li>
            <li style={liStyle}>Pricing</li>
            <li style={liStyle}>Resources</li>
            <li style={liStyle}>Pro sellers</li>
            <li style={liStyle}>GelatoConnect</li>
          </ul>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div style={overlayStyle} onClick={toggleSidebar}></div>
    </React.Fragment>
  );
};

export default Header;
