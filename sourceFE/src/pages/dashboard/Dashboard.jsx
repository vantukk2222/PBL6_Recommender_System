import React from "react";
import { Outlet } from "react-router-dom";
import { Banner } from "../../components/banners/Banner";
import { TopRanking } from "../../components/UI/TopRanking";

const Dashboard = () => {
  return (
    <div className=" flex flex-col justify-end items-center w-screen max-w-[1080px]">
      <Banner />
      <TopRanking />
      <Banner />
    </div>
  );
};

export default Dashboard;
