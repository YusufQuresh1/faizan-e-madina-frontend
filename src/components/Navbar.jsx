import React, { useState } from "react";
import fullLogo from "../assets/website-logo.png";
// 1. HERE is the updated icon import
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeAllMenus = () => {
    setIsNavVisible(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="content-wrapper">
        <div className="navbar-header">
          <a href="#home" className="navbar-brand-link" onClick={closeAllMenus}>
            <img
              src={fullLogo}
              alt="Faizan-e-Madina Southend Logo"
              className="navbar-brand-image"
            />
          </a>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isNavVisible}
          onClick={() => {
            setIsNavVisible(!isNavVisible);
            setIsDropdownOpen(false);
          }}
        >
          <span className="sr-only">Menu</span>
        </button>

        <div className="nav-links-container" data-visible={isNavVisible}>
          <ul id="primary-navigation" className="nav-links">
            <li>
              <a href="#home" onClick={closeAllMenus}>
                Home
              </a>
            </li>
            <li className={isDropdownOpen ? "dropdown open" : "dropdown"}>
              <a
                href="#about"
                className="dropdown-toggle"
                onClick={toggleDropdown}
              >
                {/* 2. HERE is the updated icon component */}
                About <FaAngleDown className="caret-icon" />
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a href="#prayer-times" onClick={closeAllMenus}>
                    Prayer Timetable
                  </a>
                </li>
                <li>
                  <a href="#about-us" onClick={closeAllMenus}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={closeAllMenus}>
                    Services
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#announcements" onClick={closeAllMenus}>
                Announcements
              </a>
            </li>
            <li>
              <a href="#donate" onClick={closeAllMenus}>
                Donate
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={closeAllMenus}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#footer" onClick={closeAllMenus}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
