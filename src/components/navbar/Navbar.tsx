import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Logo, MoonIcon, SunIcon } from "../icons/Icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="bg-red-500 flex justify-around items-center py-2 shadow-[4px_4px_8px_#00000020]">
      <div>
        <Logo height="48px" />
      </div>
      <div className="switch">
        <SunIcon width="28" height="28" />
        <label>
          <input
            type="checkbox"
            className="check-switch"
            checked={darkMode}
            onChange={toggleDarkMode}
            hidden
          />
          <span className="slider"></span>
        </label>
        <MoonIcon width="28" height="28" />
      </div>
    </nav>
  );
};

export default Navbar;
