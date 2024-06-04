import Proptypes from "prop-types";
import { EachItemTopRanking } from "./EachItemTopRanking";
import { useEffect, useState } from "react";
import { getNovels } from "../../ultis/utilsNovel";
import useNovel from "../../hooks/useNovel";
import { Loading } from "../../components/UI/Loading";
import { PaginationNav1Presentation } from "../../components/pagination/PaginationNovel";
export const Ranking = () => {
  const [is_Loading, setIsLoading] = useState(true);
  const [is_LoadingPage, setIsLoadingPage] = useState(false);
  const [sortBy, setSortBy] = useState("powerStone");
  const {
    listNovel,
    setListNovel,
    filter: filterNovel,
    setFilter: setFilterNovel,
    page: pageNovel,
    setPage: setPageNovel,
  } = useNovel();

  useEffect(() => {
    setIsLoadingPage(true);
    const newFilter = {
      ...filterNovel,
      page: pageNovel?.currentPage || 1,
      pageSize: 20,
      sortOrder: "desc",
      sortField: sortBy || "powerStone",
    };
    getNovels(newFilter).then((data) => {
      setIsLoadingPage(false);
      setListNovel((prevState) => ({
        ...prevState,
        ranking1: data.novels,
      }));
      setPageNovel({
        currentPage: data.page.currentPage,
        totalPages: data.page.totalPages,
      });
      setIsLoading(false);
    });
  }, [pageNovel.currentPage, sortBy]);
  return !is_Loading ? (
    <div className=" relative flex flex-row mx-auto   w-screen max-w-[1080px] max-h-[1620px] h-[1620px]">
      <div className="text-[20px] font-semibold text-blue-600 text-center inline-flex items-center flex-flex-col w-[191px] h-fit">
        Hot Ranking
      </div>
      <div className="flex flex-col w-full">
        <div>
          <div className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200 w-full	">
            {sortBy === "powerStone"
              ? "Power "
              : sortBy === "views"
              ? "View "
              : "Rating "}
            Ranking
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col pb-2  w-full">
              <legend className="text-[12px] text-gray-400 font-medium mt-2 mb-1">
                Filter by Book’s{" "}
                {sortBy === "powerStone"
                  ? "PowerStone "
                  : sortBy === "views"
                  ? "Views"
                  : "Rating"}
              </legend>
              <div className="flex flex-row space-x-4 mb-4 text-gray-400 text-[14px] font-medium">
                <p
                  className={` px-4 py-1 rounded-xl border-[1px] hover:cursor-pointer ${
                    sortBy === "powerStone" ? "bg-sky-100 text-blue-500 " : ""
                  }`}
                  onClick={() => {
                    setSortBy("powerStone");
                  }}
                >
                  PowerStone
                </p>
                <p
                  className={`px-4 py-1 rounded-xl border-[1px] hover:cursor-pointer ${
                    sortBy === "views" ? "bg-sky-100 text-blue-500 " : ""
                  }`}
                  onClick={() => {
                    setSortBy("views");
                  }}
                >
                  View
                </p>
                <p
                  className={`px-4 py-1 rounded-xl border-[1px] hover:cursor-pointer ${
                    sortBy === "averageRating"
                      ? "bg-sky-100 text-blue-500 "
                      : ""
                  }`}
                  onClick={() => {
                    setSortBy("averageRating");
                  }}
                >
                  Rating
                </p>
              </div>
              {is_LoadingPage && (
                <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
                  <span className="sr-only">Loading...</span>
                  <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
                </div>
              )}
              {!is_LoadingPage && (
                <div className="grid grid-cols-1 w-full transition duration-300 ease-in-out ">
                  {listNovel?.ranking1?.map((eachNovel, index) => {
                    return (
                      <EachItemTopRanking
                        key={index}
                        item={eachNovel}
                        sort={sortBy}
                        rank={index + 1 + (pageNovel?.currentPage - 1) * 20}
                      />
                    );
                  })}
                </div>
              )}
              <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
                <PaginationNav1Presentation
                  pageIndex={pageNovel?.currentPage}
                  setPageIndex={setPageNovel}
                  pageCount={pageNovel?.totalPages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
};
