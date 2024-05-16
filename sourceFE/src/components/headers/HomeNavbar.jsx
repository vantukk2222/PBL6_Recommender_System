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
                <a
                  href="/genres/novels/all"
                  className="nav-links flex flex-row"
                  onClick={handleClick}
                  onMouseEnter={() => setIsModalGenresOpen(true)}
                  onMouseLeave={() => setIsModalGenresOpen(false)}
                  style={{ position: "relative" }}
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
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/ranking/"
                  className="nav-links flex flex-row"
                  onClick={handleClick}
                  onMouseEnter={() => setIsModalRankingOpen(true)}
                  onMouseLeave={() => setIsModalRankingOpen(false)}
                  style={{ position: "relative" }}
                >
                  <strong>Rankings</strong>
                  {isModalRankingOpen && (
                    <div className="absolute top-full left-0 hover:cursor-auto	">
                      <div className=" flex flex-col text-white  pt-2 text-[18px] font-semibold  bg-black h-max-[120px] h-fit  w-max rounded-tl-lg	rounded-bl-lg ">
                        {Object.keys(genres)?.map((genre, index) => (
                          <NavLink
                            to={
                              "/ranking/" +
                              genre
                                .toLowerCase()
                                .replace("_", "-")
                                .replace(" ", "-")
                            }
                            key={index}
                            className="pl-2 py-2 pr-6 hover:bg-blue-700 -lg hover:cursor-pointer  "
                          >
                            {genre.replace("_", "-") + " Ranking"}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a to="/blog" className="nav-links" onClick={handleClick}>
                  <strong>Create</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
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
