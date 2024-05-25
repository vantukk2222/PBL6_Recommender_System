import Proptypes from "prop-types";
import { EachItemTopRanking } from "./EachItemTopRanking";
import { useEffect, useState } from "react";
import { getNovels } from "../../ultis/utilsNovel";
import useNovel from "../../hooks/useNovel";
import { Loading } from "../../components/UI/Loading";
export const Ranking = () => {
 

  const [is_Loading, setIsLoading] = useState(false);
  const {
    listNovel,
    setListNovel,
    filter: filterNovel,
    setFilter: setFilterNovel,
    page: pageNovel,
    setPage: setPageNovel,
  } = useNovel();
  useEffect(() => {
    setIsLoading(true);
    const newFilter = {
      ...filterNovel,
      page: 1,
      pageSize: 20,
      sortOrder: "desc",
      sortField: "powerStone",
    };
    getNovels(newFilter).then((data) => {
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
  }, []);
  return !is_Loading ? (
    <div className=" flex flex-row  w-screen max-w-[1080px] max-h-[1620px] h-[1620px]">
      <div className="text-[20px] font-semibold text-blue-600 text-center inline-flex items-center flex-flex-col w-[191px] h-fit">
        Hot Ranking
      </div>
      <div className="flex flex-col w-full">
        <div>
          <div className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200 w-full	">
            Power Ranking
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col pb-2">
              <legend className="text-[12px] text-gray-400 font-medium mt-2 mb-1">
                Filter by Book’s Release Time
              </legend>
              <div className="flex flex-row space-x-4 mb-4 ">
                <p
                  className={
                    "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                  }
                >
                  Monthly
                </p>
                <p
                  className={
                    "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px]  text-gray-400 hover:cursor-pointer"
                  }
                >
                  Season
                </p>
                <p
                  className={
                    "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px]  text-gray-400  hover:cursor-pointer"
                  }
                >
                  Annual
                </p>
                <p
                  className={
                    "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px]  text-gray-400  hover:cursor-pointer"
                  }
                >
                  All-time
                </p>
              </div>
              <div className="grid grid-cols-1 w-full ">
                {listNovel?.ranking1?.map((eachNovel, index) => {
                  return (
                    <EachItemTopRanking
                      key={index}
                      item={eachNovel}
                      rank={index + 1}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
