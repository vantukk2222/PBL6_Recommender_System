import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/HomeNavbar.css";
import { Transition } from "@headlessui/react";

import {
  CodeIcon,
  HamburgetMenuClose,
  HamburgetMenuOpen,
  BrowseIcon,
} from "./icon";
import { ModalHeader } from "./ModalHeader";
import {
  getCategories,
  getCategoriesByFilter,
} from "../../ultis/utilsCategory";
import useCategory from "../../hooks/useCategory";
import { Loading } from "../UI/Loading";
import useAuthen from "../../hooks/useAuthen";
import { toast } from "react-toastify";
import { set } from "lodash";
import useNovel from "../../hooks/useNovel";
import { getNovels } from "../../ultis/utilsNovel";
function HomeNavbar() {
  const navigate = useNavigate();
  const [isModalGenresOpen, setIsModalGenresOpen] = useState(false);

  const [login, setLogin] = useState(false);

  const [clickProfile, setClickProfile] = useState(false);
  const modalRef = useRef(null);
  const linkRef = useRef(null);
  const searchInputRef = useRef();

  const handleClickProfile = () => {
    setClickProfile(!clickProfile);
  };
  const [is_Loading, setIsLoading] = useState(true);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setClickProfile(false);
    }
  };
  const { user, setUser, setIsAuth, setRole, role } = useAuthen();
  const [infor, setInfor] = useState({});
  const [Token, setToken] = useState({});
  const {
    novelData,
    setNovelData,
    listNovel,
    setListNovel,
    filter,
    setFilter,
    page,
    setPage,
    search: searchNovel,
    setSearch: setSearchNovel,
  } = useNovel();
  const handleSearch = (zzzSearch) => {
    setSearchNovel(zzzSearch);
    window.location.href = "/search";
  };

  useEffect(() => {
    setInfor(JSON.parse(localStorage.getItem("inforUser")) || {});
    setToken(JSON.parse(localStorage.getItem("Token")) || {});
  }, []);
  useEffect(() => {
    if (infor?.userName && Token?.role) {
      setUser({
        username: infor?.userName || "user",
      });
      setLogin(true);
    }
  }, [infor, Token]);

  useEffect(() => {
    if (clickProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickProfile]);
  const handleClick = (event) => {
    event.preventDefault();
    toast.error("Please login to use this feature!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  };
  useEffect(() => {
    if (linkRef.current) {
      if (Token.id) {
        linkRef.current.href = "/library";
        linkRef.current.removeAttribute("rel");
      } else {
        linkRef.current.addEventListener("click", handleClick);
      }
    }

    // Cleanup function
    return () => {
      if (linkRef.current) {
        linkRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [Token]);
  const { categoryData, setCategoryData } = useCategory();
  useEffect(() => {
    setIsLoading(true);
    getCategoriesByFilter().then((response) => {
      setCategoryData(response.categories);
      setIsLoading(false);
    });
  }, []);
  const handleSignout = () => {
    setClickProfile(false);
    setUser({});
    setIsAuth(false);
    setRole(0);
    setLogin(false);
    setToken({});
    localStorage.setItem("Token", JSON.stringify({}));
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="flex flex-row">
            <a href="/" className="nav-logo mr-10">
              <span></span>
              {/* <i className="fas fa-code"></i> */}
              <span className="icon">
                <CodeIcon />
              </span>
            </a>
            <ul className="nav-menu">
              <li
                className="nav-item"
                onMouseLeave={() => setIsModalGenresOpen(false)}
                onMouseEnter={() => setIsModalGenresOpen(true)}
                style={{ position: "relative" }}
              >
                <a
                  href="/genres/novels/all"
                  className="nav-links flex flex-row"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <span className="mr-2 mt-2">
                    <BrowseIcon />
                  </span>
                  <strong>Browse</strong>{" "}
                </a>
                {isModalGenresOpen &&
                  (!is_Loading ? (
                    <ModalHeader dataModal={categoryData} />
                  ) : (
                    <div className="absolute top-full left-0 hover:cursor-auto max-h-[260px] h-[260px] h-fit">
                      <div className="flex flex-col flex-wrap items-center justify-center max-h-[260px] h-[260px]  w-[600px] bg-gray-800 rounded-lg pt-2">
                        <Loading />
                      </div>
                    </div>
                  ))}
              </li>
              <li className="nav-item">
                <a
                  href="/ranking/"
                  className="nav-links flex flex-row"
                  style={{ position: "relative" }}
                >
                  <strong>Rankings</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center gap-4">
            <a
              className="w-full flex flex-row items-center hover:cursor-pointer hover:transition-all hover:duration-300 hover:scale-110 hover:bg-opacity-50 hover:rounded-2xl hover:shadow-lg"
              rel="nofollow"
              title="Search"
            >
              <input
                type="text"
                id="Search"
                name="Search"
                ref={searchInputRef}
                placeholder="Type to search..."
                className=" text-[16px] px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => {
                  console.log("seach: ", searchInputRef.current.value);

                  if (searchInputRef.current.value) {
                    handleSearch(searchInputRef.current.value);
                  } else {
                    searchInputRef.current.focus();
                  }
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-slate-400 border-1 rounded border-blue-400 hover:border-slate-500 hover:fill-slate-500 transition-all duration-300"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.745 16.442a8 8 0 111.697-1.697L21 19.303 19.303 21l-4.558-4.558zM15.6 10a5.6 5.6 0 11-11.2 0 5.6 5.6 0 0111.2 0z"
                  ></path>
                </svg>
              </button>
            </a>
            <a
              title="Library"
              className="text-[17px] font-medium text-gray-500 w-full "
              href="/library"
              rel="nofollow"
              ref={linkRef}
            >
              <strong>Library</strong>
            </a>

            <div className=" relative w-full ">
              {login == true ? (
                <a
                  className="block hover:scale-110	 hover:cursor-pointer hover:transition-all hover:duration-300  hover:bg-gray-800 hover:bg-opacity-50 hover:rounded-2xl hover:shadow-lg"
                  href="###"
                  title="My Profile"
                  rel="nofollow"
                  onClick={() => {
                    handleClickProfile();
                  }}
                >
                  <img
                    id="headerAvatar"
                    width="40"
                    height="40"
                    className="rounded-full overflow-hidden transition-all duration-300 w-10 h-10"
                    src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                    alt="DaoistpNlawl"
                  />
                </a>
              ) : (
                <a
                  className="block uppercase text-[15px] text-white bg-blue-500 px-4 py-1 rounded-2xl hover:bg-blue-600 transition-all duration-300"
                  href="/login"
                  title="My Profile"
                  rel="nofollow"
                >
                  Sign in
                </a>
              )}
              {clickProfile && (
                <div
                  ref={modalRef}
                  className="modalProfile absolute right-0 mt-2 w-56 bg-gray-800 text-white border rounded shadow-lg z-20"
                >
                  <div className="flex p-3 border-b">
                    <a
                      href={"/profile/" + Token?.id}
                      title="My Profile"
                      className="flex-shrink-0"
                    >
                      <img
                        width="56"
                        height="56"
                        className="mr-2"
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        alt="user"
                      />
                    </a>
                    <div>
                      <div className="flex items-center mb-1">
                        <a
                          href={"/profile/" + Token?.id}
                          title="My Profile"
                          className="font-bold text-lg truncate"
                        >
                          {user?.username}
                        </a>
                      </div>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="###"
                        title="Sign Out"
                        className="block p-3 hover:bg-gray-600"
                        onClick={() => {
                          handleSignout();
                        }}
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
