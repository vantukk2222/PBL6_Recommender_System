import React, { useEffect, useMemo, useState } from "react";
import "./css/HomeHeader.css";
import HomeNavbar from "./HomeNavbar";
import { Outlet } from "react-router-dom";
import useAuthen from "../../hooks/useAuthen";
import AdminNavbar from "./AdminNavbar";
import { Loading } from "../UI/Loading";

function AdminHeader() {
    const { role } = useAuthen();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        const timer = setTimeout(()=>{
            setIsLoading(false);
        },5000);
        return () => clearTimeout(timer)
    },[])
    return (
        <div className="container">
            <div className="headerNav">
                <AdminNavbar />
            </div>
            <div className="row">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminHeader;
