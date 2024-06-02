import React, { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getNovel } from "../../ultis/utilsNovel";
import ImageWithPlaceholder from "../../components/UI/ImagePlaceHolder";
import { proxyUrl } from "../../api/apiProxy";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { Loading } from "../../components/UI/Loading";
export const EachItemInLibraries = ({ id_novel }) => {
  const [items, setItem] = useState({});
  const [is_loading, setIsLoading] = useState(true);
  useEffect(() => {
    getNovel(id_novel).then((res) => {
      setItem(res);
      setIsLoading(false);
    });
  }, [id_novel]);

  return !is_loading ? (
    <>
      <div className="max-w-[140px] max-h[280px] h-[280px]  bg-white  ">
        <a href={"/content/" + items?._id}>
          <ImageWithPlaceholder
            classname="w-[140px] h-[186px]  ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-500"
            source={proxyUrl(items?.imageUrl)}
            title_name={items?.name}
          />
        </a>
        <div className=" max-w-[140px]  mt-1">
          <a href={"/content/" + items?._id}>
            <h5
              className="font-bold  tracking-tight text-gray-900 line-clamp-2 text-[16px] h-[50px] max-h-[50px]	"
              title={items?.name}
            >
              {items?.name}
            </h5>
          </a>
          <a
            href={"/genres/novels/" + items?.category?.name.toLowerCase()}
            className="font-normal text-gray-500 hover:underline "
            title={capitalizeFirstLetter(items?.category?.name)}
          >
            {capitalizeFirstLetter(items?.category?.name)}
          </a>
        </div>
      </div>
    </>
  ) : (
    <div className="max-w-[140px] max-h[220px] h-[220px]  bg-white flex justify-center  ">
      <Loading />
    </div>
  );
};

EachItemInLibraries.propTypes = {
  id_novel: PropTypes.string.isRequired,
};
