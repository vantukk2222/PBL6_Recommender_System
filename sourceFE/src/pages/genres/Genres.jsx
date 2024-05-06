import React, { useEffect, useState } from "react";
import "./css/genres.css";
import { PropTypes } from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
export const Genres = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedGenresIndex, setSelectedGenresIndex] = useState(0);
  const [selectedGenresNovelIndex, setSelectedGenresNovelIndex] = useState(0);
  const [pathName, setPathName] = useState(location.pathname.split("/")[2]);
  const [selectedGenres, setSelectedGenres] = useState(
    location.pathname.split("/")[3]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    pathName === "novels" ? false : true
  );
  const [isDropdownNovelOpen, setIsDropdownNovelOpen] = useState(
    pathName === "novels" ? true : false
  );

  //   useEffect(() => {
  //     console.log("mkszdmkf");
  //     navigate(
  //       "/genres/" +
  //         pathName +
  //         "/" +
  //         selectedGenres
  //           .replace(/[^a-z0-9\s]/gi, "")
  //           .split(/\s+/)
  //           .join("-")
  //           .toLowerCase()
  //     );
  //   }, [navigate, pathName, selectedGenres]);
  return (
    <>
      <div className=" flex flex-row items-center w-screen max-w-[1080px]">
        <div className="section-genres flex-flex-col">
          <div className="flex flex-col ">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="dropdown-genres text-center inline-flex items-center w-fit space-x-6"
              type="button"
              onClick={() => {
                setIsDropdownNovelOpen(!isDropdownNovelOpen);
                setSelectedGenresIndex(0);
                setIsDropdownOpen(false);
              }}
            >
              <p> Genre of Novel</p>
              <svg
                className="w-4 h-4 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownNovelOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white truncate flex flex-col flex-wrap max-h-[280px] mb-2"
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <a
                    href={
                      "/genres/" +
                      pathName +
                      "/" +
                      selectedGenres
                        .replace(/[^a-z0-9\s]/gi, "")
                        .split(/\s+/)
                        .join("-")
                        .toLowerCase()
                    }
                    key={index}
                    className={
                      selectedGenresNovelIndex === index &&
                      pathName === "novels"
                        ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                        : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                    }
                    onClick={() => {
                      setSelectedGenresNovelIndex(index);
                      setSelectedGenres("Anime & Manga" + index);
                      setPathName("novels");
                    }}
                  >
                    Anime & Manga
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="dropdown-genres text-center inline-flex items-center w-fit space-x-6"
              type="button"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setSelectedGenresNovelIndex(0);
                setIsDropdownNovelOpen(false);
              }}
            >
              <p> Genre of Fan-fic</p>
              <svg
                className="w-4 h-4 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white truncate flex flex-col flex-wrap max-h-[280px] mb-2"
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <a
                    href={
                      "/genres/" +
                      pathName +
                      "/" +
                      selectedGenres
                        .replace(/[^a-z0-9\s]/gi, "")
                        .split(/\s+/)
                        .join("-")
                        .toLowerCase()
                    }
                    key={index}
                    className={
                      selectedGenresIndex === index && pathName === "fan-fic"
                        ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                        : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                    }
                    onClick={() => {
                      setSelectedGenresIndex(index);
                      setSelectedGenres("Anime & Manga" + index);
                      setPathName("fan-fic");
                    }}
                  >
                    Anime & Manga
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>1</div>
      </div>
    </>
  );
};
