import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="topnav">
      <div className="hamandlogo">
        <div
          className={`hamburger ${active ? "change" : ""}`}
          onClick={handleClick}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        
      </div>

      <nav className={`nav ${active ? "shownav" : "hidenav"}`}>
        <NavLink to="/" onClick={() => setActive(!active)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setActive(!active)}>
          About
        </NavLink>
        <NavLink to="/media" onClick={() => setActive(!active)}>
          Media
        </NavLink>
        <NavLink to="/home" className="logopic" onClick={() => setActive(false)}>
          <img src="https://res.cloudinary.com/twin2052000/image/upload/v1600281057/Base_Logo_sy3osy.png" />
        </NavLink>
        <NavLink to="/visuals" onClick={() => setActive(!active)}>
          Visuals
        </NavLink>
        <NavLink to="/contact" onClick={() => setActive(!active)}>
          Contact
        </NavLink>
        
      </nav>
    </div>
  );
};

export default Nav;