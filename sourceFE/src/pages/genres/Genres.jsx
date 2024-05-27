import React, { useEffect, useState } from "react";
import "./css/genres.css";
import PropTypes from "prop-types";
import { useNavigate, useLocation, NavLink, useParams } from "react-router-dom";
import { EachItemNovelGenre } from "./EachItemNovelGenre";
import useCategory from "./../../hooks/useCategory";
import { getCategories } from "../../ultis/utilsCategory";
import { getNovels, getNovelsByCategoryID } from "../../ultis/utilsNovel";
import useNovel from "../../hooks/useNovel";
import { Loading } from "../../components/UI/Loading";
import { Categories } from "../../components/UI/Categories";
export const Genres = () => {
  const { genres, novel } = useParams();

  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);

  const [is_loading, setIsLoading] = useState(false);
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
    getCategories().then((response) => {
      setCategoryData(response.categories);
      setSelectedCateIndex(
        response.categories.find(
          (eachCategory) =>
            eachCategory.name
              .replace(/[^a-z0-9\s]/gi, "")
              .split(/\s+/)
              .join("-")
              .toLowerCase() === genres
        )?._id || 0
      );
    });
  }, [genres]);
  useEffect(() => {
    setIsLoading(true);
    const newFilter = {
      ...filter,
      categoryId: genres == "all" ? 0 : selectedCateIndex,
      page: 1,
      pageSize: 20,
    };
    getNovelsByCategoryID(newFilter).then((data) => {
      setListNovel((prevState) => ({
        ...prevState,
        genres1: data.novels,
      }));
      setPage({
        currentPage: data.page.currentPage,
        totalPages: data.page.totalPages,
      });
      setIsLoading(false);
    });
  }, [genres]);
  return is_loading === false ? (
    <>
      <div className=" flex flex-row  w-screen mx-auto  max-w-[1080px] max-h-[1620px] h-[1620px]">
        <Categories genres={genres} />
        <div className="flex flex-col w-screen justify-start max-w[890px] h-fit pl-[40px] ">
          <div>
            <div
              className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200	w-full	"
              onClick={() => {
                console.log("category data: ", genres);
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
            {listNovel?.genres1?.map((eachNovel, index) => {
              return <EachItemNovelGenre key={index} item={eachNovel} />;
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
};
