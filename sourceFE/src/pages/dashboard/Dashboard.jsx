import React from "react";
import { Outlet } from "react-router-dom";
import { Banner } from "../../components/banners/Banner";

const Dashboard = () => {
  return (
    <div className=" flex flex-col justify-center	items-center w-screen">
      <Banner />
      <Banner />
      <Banner />
    </div>
  );
};

export default Dashboard;
