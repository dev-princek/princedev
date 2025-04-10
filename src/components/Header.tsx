'use client'
import React, { useState,useEffect } from "react";
import { Home, Person, Work, Email, Menu as MenuIcon } from "@mui/icons-material";

const Header = ({ setActiveComponent }: { setActiveComponent: (component: string) => void, activeComponent: string }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { id: "home", label: "Home", icon: <Home fontSize="medium" /> },
    { id: "about", label: "About", icon: <Person fontSize="medium" /> },
    { id: "project", label: "Project", icon: <Work fontSize="medium" /> },
    { id: "contact", label: "Contact", icon: <Email fontSize="medium" /> },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      
    };
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      {/* Desktop Menu */}
      <nav className="menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`menu-item-desktop ${hoveredItem === item.id ? "active" : ""}`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setActiveComponent(item.id)}
          >
            {item.icon}
            <span className="menu-text">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile Circular Menu */}
      <div className="circular-menu">
        <div
          className="menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon fontSize="large" />
        </div>

        <div className={`menu-items ${isMobileMenuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href="#"
              className="menu-item"
              onClick={() => {
                setActiveComponent(item.id);
                setIsMobileMenuOpen(false); // Close menu after selecting
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
