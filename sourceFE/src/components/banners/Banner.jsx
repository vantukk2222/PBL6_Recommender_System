import React, { useState, useEffect } from "react";
import "./css/banner.css";
import { CarouselItem } from "../Carousel/CarouselImage";
import { WeeklyItem } from "../Cards/WeeklyItem";
export const Banner = () => {
  return (
    <div className="flex flex-col w-full pb-12 ">
      <h1 className="text-2xl text-black font-bold mb-4 pb-6 border-b-2	">
        Weekly Featured
      </h1>
      <div className="flex flex-row ">
        {/* carolsel */}
        <CarouselItem />
        {/* grid table */}
        <div className="grid grid-cols-5 grid-cols-2 gap-5 ml-10 ">
          {/* item */}
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          <WeeklyItem />
          {/* item */}
        </div>
      </div>
    </div>
  );
};
