'use client'
import React, { useState } from "react";
import { Home, Person, Work, Email } from "@mui/icons-material"; 

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: "home", label: "Home", icon: <Home fontSize="medium" /> },
    { id: "about", label: "About", icon: <Person fontSize="medium" /> },
    { id: "projects", label: "Projects", icon: <Work fontSize="medium" /> },
    { id: "contact", label: "Contact", icon: <Email fontSize="medium" /> },
  ];

  return (
    <header className="header">
      <nav className="menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`menu-item ${hoveredItem === item.id ? "active" : ""}`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.icon}
            <span className="menu-text">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
