import React, { useEffect, useState } from "react";
import "./css/genres.css";
import PropTypes from "prop-types";
import { useNavigate, useLocation, NavLink, useParams } from "react-router-dom";
import { EachItemNovelGenre } from "./EachItemNovelGenre";
import useCategory from "./../../hooks/useCategory";
import { getCategories } from "../../ultis/utilsCategory";
import { getNovels } from "../../ultis/utilsNovel";
import useNovel from "../../hooks/useNovel";
import { Loading } from "../../components/UI/Loading";
export const Genres = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { genres, novel } = useParams();
  const [selectedGenresIndex, setSelectedGenresIndex] = useState(0);
  const [selectedGenresNovelIndex, setSelectedGenresNovelIndex] = useState(0);
  const [pathName, setPathName] = useState(location.pathname.split("/")[2]);
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);

  const [selectedGenres, setSelectedGenres] = useState(
    location.pathname.split("/")[3]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    pathName === "novels" ? false : true
  );
  const [isDropdownNovelOpen, setIsDropdownNovelOpen] = useState(
    pathName === "novels" ? true : false
  );

  const [is_loading, setIsLoading] = useState(false);
  const {
    categoryData,
    setCategoryData,
    listCategory,
    filter,
    setFilter,
    page,
    setPage,
  } = useCategory();
  const {
    novelData,
    setNovelData,
    listNovel,
    setListNovel,
    filter: filterNovel,
    setFilter: setFilterNovel,
    page: pageNovel,
    setPage: setPageNovel,
  } = useNovel();

  useEffect(() => {
    setIsLoading(true);
    navigate(
      "/genres/" +
        pathName +
        "/" +
        selectedGenres
          .replace(/[^a-z0-9\s]/gi, "")
          .split(/\s+/)
          .join("-")
          .toLowerCase()
    );
    setIsLoading(false);
  }, [navigate, pathName, selectedGenres]);
  useEffect(() => {
    getCategories().then((response) => {
      setIsLoading(true);

      setCategoryData(response.categories);
      novel === "novels"
        ? setSelectedGenresNovelIndex(
            response.categories.findIndex(
              (category) =>
                category.name
                  .replace(/[^a-z0-9\s]/gi, "")
                  .split(/\s+/)
                  .join("-")
                  .toLowerCase() === genres
            ) + 1
          )
        : setSelectedGenresIndex(
            response.categories.findIndex(
              (category) =>
                category.name
                  .replace(/[^a-z0-9\s]/gi, "")
                  .split(/\s+/)
                  .join("-")
                  .toLowerCase() === genres
            ) + 1
          );
    });
    setIsLoading(false);
  }, [pathName]);

  useEffect(() => {
    const newFilter = {
      ...filter,
      sortField: "category",
      sortOrder: "desc",
      pageSize: 20,
    };

    getNovels(newFilter).then((data) => {
      setIsLoading(true);
      setNovelData(data);
      setListNovel((prevState) => ({
        ...prevState,
        genres1: data.novels,
      }));
      setPage({
        currentPage: data.page.currentPage,
        totalPages: data.page.totalPages,
      });
    });
    setIsLoading(false);
  }, [selectedGenres]);
  return is_loading === true ? (
    <>
      <div className=" flex flex-row  w-screen max-w-[1080px] max-h-[1620px] h-[1620px]">
        <div className="section-genres flex-flex-col  h-fit">
          <div className="flex flex-col mb-2">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="dropdown-genres text-center inline-flex items-center justify-between mb-2  w-[191px] space-x-6"
              type="button"
              onClick={() => {
                setIsDropdownNovelOpen(!isDropdownNovelOpen);
                setSelectedGenresIndex(0);
                setIsDropdownOpen(false);
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
                className="z-10 bg-white truncate flex flex-col flex-wrap max-h-[280px] mb-2"
              >
                <a
                  href={
                    "/genres/" +
                    pathName +
                    "/" +
                    selectedGenres
                      .replace(/[^a-z0-9\s]/gi, "")
                      .split(/\s+/)
                      .join("-")
                      .toLowerCase()
                  }
                  key={0}
                  className={
                    selectedGenresNovelIndex === 0 && pathName === "novels"
                      ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                      : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                  }
                  onClick={() => {
                    setSelectedGenresNovelIndex(0);
                    setSelectedGenres("all");
                    setPathName("novels");
                  }}
                >
                  All
                </a>

                {categoryData?.map((eachCategory, index) => (
                  <a
                    href={
                      "/genres/" +
                      pathName +
                      "/" +
                      selectedGenres
                        .replace(/[^a-z0-9\s]/gi, "")
                        .split(/\s+/)
                        .join("-")
                        .toLowerCase()
                    }
                    key={index}
                    className={
                      selectedGenresNovelIndex === index + 1 &&
                      pathName === "novels"
                        ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                        : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                    }
                    onClick={() => {
                      setSelectedGenresNovelIndex(index + 1);
                      setSelectedGenres(eachCategory?.name);
                      setPathName("novels");
                    }}
                  >
                    {eachCategory?.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="dropdown-genres text-center inline-flex items-center mb-2  w-[191px] space-x-6"
              type="button"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setSelectedGenresNovelIndex(0);
                setIsDropdownNovelOpen(false);
              }}
            >
              <p> Genre of Fan-fic</p>
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
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white truncate flex flex-col flex-wrap max-h-[280px] mb-2"
              >
                <a
                  href={
                    "/genres/" +
                    pathName +
                    "/" +
                    selectedGenres
                      .replace(/[^a-z0-9\s]/gi, "")
                      .split(/\s+/)
                      .join("-")
                      .toLowerCase()
                  }
                  key={0}
                  className={
                    selectedGenresIndex === 0 && pathName === "fan-fic"
                      ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                      : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                  }
                  onClick={() => {
                    setSelectedGenresIndex(0);
                    setSelectedGenres("all");
                    setPathName("fan-fic");
                  }}
                >
                  All
                </a>
                {categoryData?.map((eachCategory, index) => (
                  <a
                    href={
                      "/genres/" +
                      pathName +
                      "/" +
                      selectedGenres
                        .replace(/[^a-z0-9\s]/gi, "")
                        .split(/\s+/)
                        .join("-")
                        .toLowerCase()
                    }
                    key={index + 1}
                    className={
                      selectedGenresIndex === index + 1 &&
                      pathName === "fan-fic"
                        ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                        : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                    }
                    onClick={() => {
                      setSelectedGenresIndex(index + 1);
                      setSelectedGenres(eachCategory?.name);
                      setPathName("fan-fic");
                    }}
                  >
                    {eachCategory?.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-screen justify-start max-w[890px] h-fit pl-[40px] ">
          <div>
            <div
              className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200	w-full	"
              onClick={() => {
                console.log("category data: ", is_loading);
              }}
            >
              Filter By
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-col pb-2">
                <legend className="text-[12px] text-gray-400 font-medium mt-2 mb-1">
                  {" "}
                  Content Status
                </legend>
                <div className="flex flex-row space-x-4">
                  <p
                    className={
                      selectedStatus === 0
                        ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                        : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                    }
                    onClick={() => setSelectedStatus(0)}
                  >
                    All
                  </p>
                  <p
                    className={
                      selectedStatus === 1
                        ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                        : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                    }
                    onClick={() => setSelectedStatus(1)}
                  >
                    Completed
                  </p>
                  <p
                    className={
                      selectedStatus === 2
                        ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                        : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                    }
                    onClick={() => setSelectedStatus(2)}
                  >
                    Ongoing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200	w-full	">
              Sort By
            </div>

            <div className="flex flex-row space-x-4 mt-2">
              <p
                className={
                  selectedSort === 0
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(0)}
              >
                Time updated
              </p>
              <p
                className={
                  selectedSort === 1
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(1)}
              >
                Chapters
              </p>
              <p
                className={
                  selectedSort === 2
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(2)}
              >
                Views
              </p>
              <p
                className={
                  selectedSort === 3
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(3)}
              >
                Rating
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            {novelData?.novels?.map((eachNovel, index) => {
              return <EachItemNovelGenre key={index} item={eachNovel} />;
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};
