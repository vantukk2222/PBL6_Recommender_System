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
    <div className="container w-fit">
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col justify-center items-center">
              <p className="text-center">Retrain Model</p>
              <div className="pr-2">
                <Loading />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminHeader;
