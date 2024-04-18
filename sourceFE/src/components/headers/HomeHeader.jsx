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
        <div className="col-3 col-s-3 menu">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
