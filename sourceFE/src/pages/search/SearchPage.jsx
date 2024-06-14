import Proptypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { getNovelbyListId, getNovels } from "../../ultis/utilsNovel";
import useNovel from "../../hooks/useNovel";
import { Loading } from "../../components/UI/Loading";
import { PaginationNav1Presentation } from "../../components/pagination/PaginationNovel";
import { EachItemTopRanking } from "../ranking/EachItemTopRanking";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import bigInt from "big-integer";

export const Search = () => {
  const [is_Loading, setIsLoading] = useState(true);
  const [is_LoadingPage, setIsLoadingPage] = useState(false);
  const [total, setTotal] = useState(0);
  const {
    listNovel,
    setListNovel,
    filter: filterNovel,
    setFilter: setFilterNovel,
    page: pageNovel,
    setPage: setPageNovel,
    search,
    setSearch,
    idNovelRecommender,
    setIdNovelRecommender,
  } = useNovel();

  useEffect(() => {
    getNovelbyListId(
      idNovelRecommender
        ?.map((val) => {
          const novelIdBigInt = bigInt(val.novel_id);
          return novelIdBigInt.plus(1).toString();
        })
        .slice(0, 20)
    ).then((res) => {
      setListNovel((prev) => ({
        ...prev,
        recommenderNovel: res.data.novels,
      }));
    });
  }, [idNovelRecommender]);
  const searchInputRef = useRef();
  const debouncedSearch = useRef(
    debounce((searchQuery) => {
      setIsLoadingPage(true);
      const FilterSearch = { ...filterNovel, search: searchQuery };
      getNovels(FilterSearch)
        .then((res) => {
          setIsLoadingPage(false);
          if (res.novels.length > 0) {
            setListNovel((prev) => ({
              ...prev,
              search: res.novels,
            }));
          } else {
            toast.error(`Can't find this novel!`, {
              autoClose: 1000,
            });
          }
          setIsLoading(false);
          setTotal(res.page.total);
          setPageNovel({
            totalPages: res.page.totalPages,
            currentPage: res.page.currentPage,
          });
        })
        .catch((err) => {
          setIsLoadingPage(false);
          setIsLoading(false);
          toast.error(
            "An error occurred while fetching novels. Please try again later."
          );
        });
    }, 500)
  ).current;

  const handleSearch = (event) => {
    setSearch(event.target.value);
    debouncedSearch(event.target.value);
  };

  // Gọi API khi component mount
  useEffect(() => {
    debouncedSearch(search);

    return () => {
      setSearch("");
    };
  }, []);

  return !is_Loading ? (
    <div className=" flex flex-col justify-end items-center mx-auto  w-screen max-w-[1080px] mt-10">
      <div className="text-[20px] font-semibold text-gray-500 mb-2 shadow-md border-b-[1px] border-gray-200 w-fit bg-gray-100 	">
        <a
          className="w-full flex flex-row items-center hover:cursor-pointer hover:transition-all hover:duration-300 hover:scale-110 hover:bg-opacity-50 hover:rounded-2xl hover:shadow-xl"
          rel="nofollow"
          title="Search"
        >
          <input
            type="text"
            id="Search"
            name="Search"
            onChange={handleSearch}
            ref={searchInputRef}
            placeholder="Type to search..."
            value={search}
            className=" text-[22px] px-6 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </a>
      </div>

      <div className="flex flex-col pb-2  w-fit">
        {is_LoadingPage && (
          <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
            <span className="sr-only">Loading...</span>
            <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
          </div>
        )}
        {!is_LoadingPage && (
          <div className="grid grid-cols-1 w-fit transition duration-300 ease-in-out ">
            <p className="text-[18px] text-gray-400">About {total} result </p>
            {listNovel?.search?.slice(0, 10)?.map((eachNovel, index) => {
              return (
                <EachItemTopRanking
                  key={index}
                  item={eachNovel}
                  sort={"averageRating"}
                  rank={0}
                />
              );
            })}
          </div>
        )}
        <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
          <PaginationNav1Presentation
            pageIndex={pageNovel?.currentPage || 1}
            setPageIndex={setPageNovel}
            pageCount={pageNovel?.totalPages || 1}
          />
        </div>
        <div className="grid grid-cols-1 w-fit transition duration-300 ease-in-out ">
          {!is_LoadingPage && (
            <div className="grid grid-cols-1 w-fit transition duration-300 ease-in-out ">
              <h2 className="text-[30px] text-center my-2">
                You may also like
              </h2>

              {listNovel?.recommenderNovel
                ?.slice(0, 10)
                ?.map((eachNovel, index) => {
                  return (
                    <EachItemTopRanking
                      key={index}
                      item={eachNovel}
                      sort={"averageRating"}
                      rank={0}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
};
