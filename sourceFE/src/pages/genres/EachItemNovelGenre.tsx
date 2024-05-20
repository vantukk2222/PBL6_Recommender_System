import React from "react";
import PropTypes from "prop-types";

export const EachItemNovelGenre = ({ item }) => {
  const proxyUrl = `http://localhost:3001/proxy-image?url=${encodeURIComponent(
    item?.imageUrl
  )}`;

  return (
    <div className="each-item-novel-genre flex flex-row mt-4">
      <div className="each-item-novel-genre__img ">
        <img
          className="w-[90px] h-[120px] rounded ease-in-out delay-100 hover:scale-105  duration-500 hover:-translate-y-1 hover:cursor-pointer"
          src={proxyUrl}
          title={item?.name}
        />
      </div>
      <div className="each-item-novel-genre__info pl-2">
        <h3
          className="text-[16px] font-semibold max-w-[250px] truncate hover:underline hover:cursor-pointer"
          title={item?.name}
        >
          {item?.name}
        </h3>
        <p
          className="text-[12px] font-semibold text-slate-500 max-w-[250px] truncate"
          title={item?.name}
        >
          {item?.author?.name}
        </p>
        <p className="line-clamp-2 font-medium	 max-w-[250px]">
          {item?.description}
        </p>
        <div className="flex flex-row space-x-4">
          <strong className="flex flex-row">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2 w-[16px] h-[16px] "
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z"
                fill="#000"
              ></path>
            </svg>
            <span className="text-[12px] font-semibold text-gray-400">
              {item?.rating}
            </span>
          </strong>
          <strong className="flex flex-row">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2 w-[16px] h-[16px] "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2h10l6 6v14H4V2zm4 4h4v2H8V6zm8 6v-2H8v2h8z"
                fill="#000"
              ></path>
            </svg>
            <span className="text-[12px] font-semibold text-gray-400">
              {item?.chapters}
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
};

EachItemNovelGenre.propTypes = {
  item: PropTypes.object.isRequired,
};
