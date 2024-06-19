import React, { useState, useEffect, Component } from "react";
import "./css/banner.css";
import { CarouselItem } from "../Carousel/CarouselImage";
import { WeeklyItem } from "../Cards/WeeklyItem";
import useNovel from "./../../hooks/useNovel";
import { PropTypes } from "prop-types";
export const Banner = ({ setIsLoading }) => {
  const {
    novelData,
    setNovelData,
    listNovel,
    setListNovel,
    filter,
    setFilter,
    page,
    setPage,
  } = useNovel();
  const [dataCarousel, setDataCarousel] = useState([]);

  return (
    <div className="flex flex-col  w-full  pb-12 ">
      <h1
        className="text-2xl text-black font-bold mb-4 pb-6 border-b-2	"
        onClick={() => {
          console.log("listNovel: ", listNovel);
        }}
      >
        Weekly Featured
      </h1>
      <div className="flex flex-row flex-wrap w-full">
        {/* carolsel */}
        <div style={{ flex: 5 }} className="flex justify-start  ">
          <CarouselItem dataCarousel={listNovel} />
        </div>
        {/* grid table */}
        <div
          className="flex flex-row flex-wrap items-center justify-left gap-5  "
          style={{ flex: 5 }}
        >
          {listNovel?.weeklyfeatured?.slice(0, 8).map((eachNovel, key) => {
            return <WeeklyItem key={key} items={eachNovel} />;
          })}
          {/* {listNovel?.map((eachNovel, key) => {
            return <WeeklyItem key={key} items={eachNovel} />;
          })}  */}
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setIsLoading: PropTypes.func,
};
