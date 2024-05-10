import React from "react";
import "./css/HomeHeader.css";
import HomeNavbar from "./HomeNavbar";
import { Outlet } from "react-router-dom";


function HomeHeader() {
  return (
    <div className="container">
      <div className="headerNav">
        <HomeNavbar />
      </div>
      <div className="row">
        <div className="menu flex w-screen justify-center	items-center ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
