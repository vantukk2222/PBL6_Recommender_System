import React, { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { proxyUrl } from "./../../api/apiProxy";
import ImageWithPlaceholder from "../UI/ImagePlaceHolder";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
export const WeeklyItem = ({ items }) => {
  return (
    <>
      <div className="max-w-[110px] w-[110px] max-h[220px] h-[220px]  bg-white  ">
        <a href={"/content/" + items?._id} className="w-[110px] h-[139.5px]">
          {/* <img
            className="w-[110px] h-[139.5px]  w-[110px] h-[139.5px] ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-500"
            src={proxyUrl(items?.imageUrl)}
            alt=""
            title={items?.name}
          /> */}
          <ImageWithPlaceholder
            classname="w-[110px] h-[139.5px]  w-[110px] h-[139.5px] ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-500"
            source={proxyUrl(items?.imageUrl)}
            title_name={items?.name}
          />
        </a>
        <div className=" max-w-[110px]  ">
          <a href={"/content/" + items?._id}>
            <h5
              className="font-bold line-clamp-2 text-[15px] h-[50px] max-h-[50px]	 tracking-tight text-gray-900"
              title={items?.name}
            >
              {items?.name}
            </h5>
          </a>
          <a
            href={"/genres/novels/" + items?.category?.name.toLowerCase()}
            className="font-normal text-gray-500 "
            title={capitalizeFirstLetter(items?.category?.name)}
          >
            {capitalizeFirstLetter(items?.category?.name)}
          </a>
        </div>
      </div>
    </>
  );
};

WeeklyItem.propTypes = {
  items: PropTypes.object.isRequired,
};
