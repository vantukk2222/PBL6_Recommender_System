import React, { useEffect, useState } from "react";
import useCategory from "../../hooks/useCategory";
import { getCategories } from "../../ultis/utilsCategory";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { preProcessingCategory } from "../../ultis/preProcessingCategory";

export const Categories = ({ genres }) => {
  const [isDropdownNovelOpen, setIsDropdownNovelOpen] = useState(true);
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

  return (
    <div className="section-genres flex-flex-col  h-fit">
      <div className="flex flex-col mb-2">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="dropdown-genres text-center inline-flex items-center justify-between mb-2  w-[191px] space-x-6"
          type="button"
          onClick={() => {
            setIsDropdownNovelOpen(!isDropdownNovelOpen);
          }}
        >
          <p> Genre of Novel</p>
          <svg
            className="w-4 h-4 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownNovelOpen && (
          <div
            id="dropdown"
            className="z-10 bg-white truncate grid grid-cols-2 mb-2"
          >
            <a
              href={"/genres/novels/all"}
              key={0}
              className={
                genres == "all"
                  ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                  : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
              }
              onClick={() => {
                setSelectedCateIndex(0);
              }}
            >
              All
            </a>

            {categoryData?.map((eachCategory, index) => (
              <a
                href={
                  "/genres/novels/" + preProcessingCategory(eachCategory?.name)
                }
                key={index}
                className={
                  selectedCateIndex === eachCategory?._id && genres !== "all"
                    ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                    : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                }
                onClick={() => {
                  setSelectedCateIndex(eachCategory?._id);
                }}
              >
                {capitalizeFirstLetter(eachCategory?.name)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Categories.propTypes = {
  genres: PropTypes.string.isRequired,
};
