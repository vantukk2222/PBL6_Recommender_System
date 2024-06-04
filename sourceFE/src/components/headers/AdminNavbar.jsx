import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./css/HomeNavbar.css";

import {
  CodeIcon,
  HamburgetMenuClose,
  HamburgetMenuOpen,
  BrowseIcon,
} from "./icon";
import useAuthen from "../../hooks/useAuthen";
import { getallCategory } from "../../ultis/utilsCategory";
import { getAllAuthor } from "../../ultis/utilsAuthor";
function AdminNavbar() {
  const navigate = useNavigate();
  const [isModalGenresOpen, setIsModalGenresOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);
  const modalRef = useRef(null);

  const handleClickProfile = () => {
    setClickProfile(!clickProfile);
  };
  const [is_Loading, setIsLoading] = useState(false);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setClickProfile(false);
    }
  };
  const { user, setUser, setIsAuth, setRole, role } = useAuthen();
  const infor = JSON.parse(localStorage.getItem("inforUser")) || {};

  useEffect(() => {
    setLogin(true);
  }, []);
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
  const handleSignout = () => {
    console.log("sign out");
    setUser({});
    setIsAuth(false);
    setRole(0);
    localStorage.setItem("Token", JSON.stringify({}));
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="flex flex-row">
            <Link to="/" className="nav-logo mr-10">
              <span></span>
              <span className="icon">
                <CodeIcon />
              </span>
            </Link>
            <ul className="nav-menu">
              <li className="nav-item" style={{ position: "relative" }}>
                <a
                  href="/"
                  className="nav-links flex flex-row"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <span className="mr-2 mt-2">
                    <BrowseIcon />
                  </span>
                  <strong>Account</strong>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/novels"
                  className="nav-links flex flex-row"
                  style={{ position: "relative" }}
                >
                  <strong>Novel</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/authors"
                  className="nav-links flex flex-row"
                  style={{ position: "relative" }}
                >
                  <strong>Author</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/categories"
                  className="nav-links flex flex-row"
                  style={{ position: "relative" }}
                >
                  <strong>Category</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className=" relative">
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
                    href="/profile/4327849712"
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
                        href="/profile/4327849712"
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
      </nav>
    </>
  );
}

export default AdminNavbar;
