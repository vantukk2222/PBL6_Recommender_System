import React, { useState, useEffect, Component } from "react";
import "./css/banner.css";
import { CarouselItem } from "../Carousel/CarouselImage";
import { WeeklyItem } from "../Cards/WeeklyItem";
import useNovel from "./../../hooks/useNovel";
import { getNovels } from "../../ultis/utilsNovel";
export const Banner = () => {
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
  useEffect(() => {
    getNovels(filter).then((data) => {
      setNovelData(data);
      setListNovel((prevState) => ({
        ...prevState,
        weeklyfeatured: data.novels,
      }));
      setPage({
        currentPage: data.page.currentPage,
        totalPages: data.page.totalPages,
      });
    });
  }, []);
  return (
    <div className="flex flex-col w-full pb-12 ">
      <h1 className="text-2xl text-black font-bold mb-4 pb-6 border-b-2	">
        Weekly Featured
      </h1>
      <div className="flex flex-row ">
        {/* carolsel */}
        <CarouselItem dataCarousel={dataCarousel} />
        {/* grid table */}
        <div className="grid grid-cols-5 grid-cols-2 gap-5 ml-10 ">
          {listNovel?.weeklyfeatured?.map((eachNovel, key) => {
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
