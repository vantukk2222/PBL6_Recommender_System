import React, { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import { NavLink } from "react-router-dom";
export const WeeklyItem = ({ items }) => {
  return (
    <>
      <div className="max-w-[105px] max-h-[139px] bg-white  ">
        <NavLink exact to="/content" className="w-[105px] h-[139.5px]">
          <img className="w-[105px] h-[139.5px]" src={banner1} alt="" />
        </NavLink>
        <div className=" max-w-[105px]">
          <NavLink exact to="/content">
            <h5
              className="font-bold line-clamp-2 text-base	 tracking-tight text-gray-900"
              title="The Imbecile Lord Is Married to Five Beautiful Goddess"
            >
              The Imbecile Lord Is Married to Five Beautiful Goddess{" "}
            </h5>
          </NavLink>
          <p className="mb-3 font-normal text-gray-700">Fantasy</p>
        </div>
      </div>
    </>
  );
};
