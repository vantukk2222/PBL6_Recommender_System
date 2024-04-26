import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/HomeNavbar.css";
import {
  CodeIcon,
  HamburgetMenuClose,
  HamburgetMenuOpen,
  BrowseIcon,
} from "./icon";
import { ModalHeader } from "./ModalHeader";

function HomeNavbar() {
  const [click, setClick] = useState(false);
  const [isModalGenresOpen, setIsModalGenresOpen] = useState(false);
  const [isModalRankingOpen, setIsModalRankingOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const genres = {
    Novels: {
      data: [
        [
          "Urban",
          "Fantasy",
          "Sci-fi",
          "Mystery",
          "Adventure",
          "Action",
          "Horror",
          "Slice of Life",
          "School Life",
          "Historical",
          "Martial Arts",
          "Sports",
        ],
        ["Urban", "Fantasy", "History", "Teen", "LGBT+", "Sci-fi", "General"],
      ],
    },
    Fan_fic: {
      data: [
        [
          "Anime & Comics",
          "Video Games",
          "Celebrities",
          "Music & Bands",
          "Movies",
          "TV",
          "Book & Literature",
          "Theater",
          "Orther",
        ],
      ],
    },
  };
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
                  to="/genres/"
                  activeClassName="active"
                  className="nav-links flex flex-row"
                  onClick={handleClick}
                  onMouseEnter={() => setIsModalGenresOpen(true)}
                  onMouseLeave={() => setIsModalGenresOpen(false)}
                  style={{ position: "relative" }} // Make sure the parent has position: relative or absolute
                >
                  <span
                    className="mr-2 mt-2"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <BrowseIcon selected={click} />
                  </span>
                  <strong>Browse</strong>{" "}
                  {isModalGenresOpen && <ModalHeader dataModal={genres} />}
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
