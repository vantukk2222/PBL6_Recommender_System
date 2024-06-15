import React, { useEffect, useMemo, useState } from "react";
import "./css/HomeHeader.css";
import HomeNavbar from "./HomeNavbar";
import { Outlet } from "react-router-dom";
import useAuthen from "../../hooks/useAuthen";
import AdminNavbar from "./AdminNavbar";
import { Loading } from "../UI/Loading";

function AdminHeader() {
  const { role, isLoading_Train, setIsLoading_Train } = useAuthen();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container">
      <div className="headerNav">
        <AdminNavbar />
      </div>
      {!isLoading_Train && (
        <div className="row">
          <Outlet />
        </div>
      )}
      {isLoading_Train && (
        <>
          <p className="">Retrain Model</p>
          <div className="pr-2">
            <Loading />
          </div>
        </>
      )}
    </div>
  );
}

export default AdminHeader;
