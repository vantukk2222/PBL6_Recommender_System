import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./css/HomeNavbar.css";


import {
  CodeIcon,
  HamburgetMenuClose,
  HamburgetMenuOpen,
  BrowseIcon,
} from "./icon";
import useAuthen from '../../hooks/useAuthen';
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
    setLogin(true)
  }, [])
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
    setUser({})
    setIsAuth(false)
    setRole(0)
    localStorage.setItem("Token", JSON.stringify({}))
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="flex flex-row">
            <Link to='/admin' className='nav-logo mr-10'>
              <span></span>
              <span className="icon">
                <CodeIcon />
              </span>
            </Link>
            <ul className="nav-menu">
              <li
                className="nav-item"
                style={{ position: "relative" }}
              >
                <a
                  href="/admin"
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
                  href="/Novel"
                  className="nav-links flex flex-row"
                  style={{ position: "relative" }}
                >
                  <strong>Novel</strong>
                </a>
              </li>
            </ul>
          </div>
          {login == true ? (
            <a
              className="block"
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
                        src="//user-pic.webnovel.com/userheadimg/4327849712-10/200.jpg?uut=1716548842206&imageMogr2/quality/80"
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
                        <a
                          href="/level"
                          title="My level"
                          className="ml-1 text-sm font-medium"
                        >
                          Lv 1
                        </a>
                      </div>
                      <div className="flex">
                        <a
                          className="flex items-center mr-4"
                          href="/bill/fastpass"
                          title="Fast pass"
                        >
                          <img
                            className="w-5 h-5"
                            src="//www.yueimg.com/en/images/fastpass.deb1e01a.png"
                            alt="fastpass"
                          />
                          <em className="ml-1 font-bold">0</em>
                        </a>
                        <a
                          className="flex items-center"
                          href="/bill/power"
                          title="Power Stones"
                        >
                          <img
                            className="w-5 h-5"
                            src="//www.yueimg.com/en/images/power.dfd3f629.png"
                            alt="power"
                          />
                          <em className="ml-1 font-bold">1</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b">
                    <a
                      className="flex items-center mr-4"
                      href="/bill/coin"
                      title="Coins"
                      data-report-eid="qi_A13"
                    >
                      <img
                        className="w-6 h-6 mr-1"
                        src="//www.yueimg.com/en/images/coin.2d25dfa5.png"
                        alt="coin"
                      />
                      <em className="font-bold">0</em>
                    </a>
                    <a
                      href="###"
                      className="text-sm font-medium"
                      data-report-eid="qi_A14"
                    >
                      Get More
                    </a>
                  </div>
                  <div className="p-2 border-b">
                    <section className="relative p-3 border rounded-md bg-warning-gradient">
                      <h5 className="font-bold text-lg mb-1">Get Membership</h5>
                      <p className="text-xs mb-2">Get Extra 60% Bonus</p>
                      <span className="btn btn-xs btn-warning">Go</span>
                      <a
                        href="###"
                        className="absolute inset-0"
                        data-report-eid="qi_A_membership"
                        title="Get Membership"
                      >
                        <span className="sr-only">more</span>
                      </a>
                    </section>
                  </div>
                  <ul>
                    
                    <li>
                      <a
                        href="/events"
                        title="Inbox"
                        className="block p-3 hover:bg-gray-600"
                      >
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a
                        href="###"
                        title="Sign Out"
                        className="block p-3 hover:bg-gray-600"
                        onClick={()=>{handleSignout()}}
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
        </div>
      </nav>
    </>
  )
}

export default AdminNavbar