import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import useCategory from "../../hooks/useCategory";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";

export const ModalHeader = ({ dataModal }) => {
  const {
    categoryData,
    setCategoryData,
    listCategory,
    filter,
    setFilter,
    page,
    setPage,
    selectedCateIndex,
    setSelectedCateIndex,
  } = useCategory();

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="absolute top-full left-0 hover:cursor-auto max-h-[260px] h-[260px] max-w-[320px]">
        <div className="flex flex-col bg-gray-800 max-h-[260px] h-[260px] max-w-[320px] w-[280px] flex-wrap rounded-lg pt-2">
          {dataModal?.map((item, index) => (
            <a
              onClick={() => {
                setSelectedCateIndex(item?._id);
              }}
              href={
                "/genres/novels/" +
                item?.name
                  .replace(/[^a-z0-9\s]/gi, "")
                  .split(/\s+/)
                  .join("-")
                  .toLowerCase()
              }
              key={index}
              className="text-white text-[15px] pl-2 ml-2 h-fit font-bold line-clamp-1 max-w-[120px] w-[120px] rounded hover:bg-blue-700 hover:cursor-pointer"
            >
              {capitalizeFirstLetter(item?.name)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

ModalHeader.propTypes = {
  dataModal: PropTypes.object.isRequired,
};
