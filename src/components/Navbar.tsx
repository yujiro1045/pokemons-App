import React from "react";
import "./Navbar.css";
import { Logo, MoonIcon, SunIcon } from "./Icons";

const Navbar = () => {
  return (
    <nav className="bg-red-500 flex justify-around items-center py-2 shadow-[4px_4px_8px_#00000020]">
      <div>
        <Logo height="48px" />
      </div>
      <div className="switch">
        <SunIcon width="28" height="28" />
        <label>
          <input type="checkbox" className="check-switch" hidden />
          <span className="slider"></span>
        </label>
        <MoonIcon width="28" height="28" />
      </div>
    </nav>
  );
};

export default Navbar;
