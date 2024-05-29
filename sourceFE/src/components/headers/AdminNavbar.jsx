import React,{useEffect, useRef, useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./css/HomeNavbar.css";


import {
    CodeIcon,
    HamburgetMenuClose,
    HamburgetMenuOpen,
    BrowseIcon,
  } from "./icon";
import useAuthen from '../../hooks/useAuthen';
function AdminNavbar(){
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
    const {user, setUser,setIsAuth,setRole,role} = useAuthen();
    const infor = JSON.parse(localStorage.getItem("inforUser")) || {};

    useEffect(() =>{
      console.log("toa chay ne");
      if(infor?.userName)
        {
          setUser({
            'username' : infor.userName,
          })
          setLogin(true)
        }
    },[])
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
      const handleSignout = () =>{
        console.log("sign out");
        setUser({})
        setIsAuth(false)
        setRole(0)
        localStorage.setItem("Token",JSON.stringify({}))
        navigate("/login"); 
      }
    
  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <div className="flex flex-row">
            <Link to='/admin' className='nav-logo mr-10'>
                <p>Admin</p>
            </Link>
        </div>
    </div>
    </nav>
    </>
  )
}

export default AdminNavbar