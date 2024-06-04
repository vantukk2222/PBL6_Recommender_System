import React, { useEffect, useState } from "react";
import { Banner } from "../../components/banners/Banner";
import { TopRanking } from "../../components/UI/TopRanking";
import banner1 from "../../assets/images/banner1.jpg";
import { HomeTags } from "../../components/Tags/HomeTags";
import { WeeklyItem } from "../../components/Cards/WeeklyItem";
import { SelectionImage } from "../../components/UI/selectionImage";
import { RecommenderNovels } from "../../components/UI/recommenderNovels";

import useNovel from "../../hooks/useNovel";
import { getNovel, getNovels } from "../../ultis/utilsNovel";
import { getAuthors } from "../../ultis/utilsAuthor";
import useAuthor from "../../hooks/useAuthor";
import { EachRanking } from "../../components/Cards/EachRanking";
import { EachItemTopRanking } from "./../ranking/EachItemTopRanking";
import { Loading } from "../../components/UI/Loading";
//import { NovelRecommender } from "../../api/apiRecommender";
import { toast } from "react-toastify";
import { getRecomment } from "../../ultis/utilsRecomment";
const Dashboard = () => {
  const Token = JSON.parse(localStorage.getItem("Token"));
  const [showAll, setShowAll] = useState(false);

  const [is_loading, setIsLoading] = useState(true);

  const [numberList, setNumberList] = useState(5);
  const extendMoreRanking = () => {
    setShowAll(!showAll);
    setNumberList(numberList === 5 ? 10 : 5);
  };
  const [idNovelRecommender, setIdNovelRecommender] = useState();

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
  const [isTrained , setIsTraned] = useState(true)
  useEffect(() => {
    getRecomment(Token?.id )
      .then((res) => {
        console.log('recommentId',res);
        setIdNovelRecommender(res.data);
      })
      .catch((error) => {
        console.error('err',error);
        setIsTraned(false)
      });
    
    const newFilter = {
      ...filter,
      sortField: "powerStone",
      sortOrder: "desc",
      pageSize: 10,
    };
    const ratingFilter = {
      ...filter,
      sortField: "averageRating",
    };

    console.log("list ID", idNovelRecommender);
    setIsLoading(true);
    Promise.all([
      getNovels(newFilter),
      getNovels(filter),
      getNovels(ratingFilter),
    ])
      .then(([data1, data2, data3, data4]) => {
        setNovelData(data1);
        setListNovel((prevState) => ({
          ...prevState,
          topranking: data1.novels,
          ratingRanking: data3.novels,
          weeklyfeatured: data2.novels,
        }));
        setPage({
          currentPage: data1.page.currentPage,
          totalPages: data1.page.totalPages,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
      });
    // getNovels(newFilter).then((data) => {
    //   setNovelData(data);
    //   setListNovel((prevState) => ({
    //     ...prevState,
    //     topranking: data.novels,
    //   }));
    //   setPage({
    //     currentPage: data.page.currentPage,
    //     totalPages: data.page.totalPages,
    //   });
    //   setIsLoading(false);
    // });
    // getNovels(filter).then((data) => {
    //   setNovelData(data);
    //   setListNovel((prevState) => ({
    //     ...prevState,
    //     weeklyfeatured: data.novels,
    //   }));
    //   setIsLoading(false);
    // });
  }, []);

  useEffect(()=>{
    if(!isTrained)
    {
      getRecomment("017173780861571831")
      .then((res) => {
        console.log('recommentId other',res.status);
        setIdNovelRecommender(res.data);
      })
      .catch((error) => {
        console.error('err',error);
        //setIsTraned(false)
      });

    }
  },[isTrained])
  return !is_loading ? (
    <div className=" flex flex-col justify-end items-center mx-auto  w-screen max-w-[1080px]">
      <Banner setIsLoading={setIsLoading} />
      <div className="flex flex-col w-full  pb-12 ">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Top Fanfic Books
          </h1>
          <a
            className="uppercase text-blue-600 text-[16px] hover:underline hover:cursor-pointer "
            href="/ranking/"
          >
            More
          </a>
        </div>
        <div className="flex flex-col justify-between">
          <div className="list-ranking flex flex-row flex-wrap justify-between">
            <EachRanking
              dataEachRanking={listNovel?.topranking?.slice(0, 10)}
              numberList={numberList}
              rank_tilte="Power Ranking"
            />
            <EachRanking
              dataEachRanking={listNovel?.weeklyfeatured.slice(0, 10)}
              numberList={numberList}
              rank_tilte="Top View"
            />
            <EachRanking
              dataEachRanking={listNovel?.ratingRanking.slice(0, 10)}
              numberList={numberList}
              rank_tilte="Top Vote"
            />
          </div>
          {!showAll ? (
            <div className="show-all-ranking flex	 justify-center items-center">
              <label
                className="uppercase font-bold text-blue-600 text-[16px]  hover:cursor-pointer "
                onClick={() => {
                  extendMoreRanking();
                }}
              >
                Extend more
              </label>
            </div>
          ) : (
            <div className="show-all-ranking flex	 justify-center items-center">
              <label
                className="uppercase font-bold text-blue-600 text-[16px]  hover:cursor-pointer "
                onClick={() => {
                  extendMoreRanking();
                }}
              >
                Show less
              </label>
            </div>
          )}
        </div>
      </div>
      <HomeTags />
      <div className="flex flex-row ">
        <div style={{ flex: 6 }}>
          <SelectionImage dataSelectionImage={listNovel?.topranking} />
        </div>
        <div style={{ flex: 4 }}>
          <RecommenderNovels
            dataRecommenderNovels={listNovel?.weeklyfeatured}
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap   w-full pb-12 ">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Completed Novel
          </h1>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {listNovel?.weeklyfeatured?.slice(0, 8).map((item, index) => (
            <WeeklyItem key={index} items={item} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
};

export default Dashboard;
