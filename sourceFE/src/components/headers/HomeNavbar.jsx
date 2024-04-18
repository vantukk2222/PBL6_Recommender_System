import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/HomeNavbar.css";
import {
  CodeIcon,
  HamburgetMenuClose,
  HamburgetMenuOpen,
  BrowseIcon,
} from "./icon";

function HomeNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="flex flex-row">
            <NavLink exact to="/" className="nav-logo mr-10">
              <span></span>
              {/* <i className="fas fa-code"></i> */}
              <span className="icon">
                <CodeIcon />
              </span>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links flex flex-row"
                  onClick={handleClick}
                >
                  <span className="mr-2 mt-2">
                    <BrowseIcon selected={click} />
                  </span>
                  <strong>Browse</strong>{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/stories"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <strong>Rankings</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <strong>Create</strong>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
