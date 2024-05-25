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
const Dashboard = () => {
  const dataTopRanking = [
    {
      title: "Top Fanfic Books",
      url: "/ranking/fanfic",
      dataEachTopRanking: [
        {
          rank_title: "Power Ranking",
          data: [
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite8 Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite9 Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
          ],
        },
        {
          rank_title: "Collection Ranking",
          data: [
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
          ],
        },
        {
          rank_title: "Active Ranking",
          data: [
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
          ],
        },
      ],
    },
    {
      title: "Ranking",
      url: "/ranking/fanfic",
      dataEachTopRanking: [
        {
          rank_title: "Power Ranking",
          data: [
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
          ],
        },
        {
          rank_title: "New",
          data: [
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
          ],
        },
        {
          rank_title: "Colection Ranking",
          data: [
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
            {
              image: banner1,
              nameOfNovel: "Endless Path : Infinite Cosmos ",
              category: "Anime & Comics",
              rating: 4.8,
            },
          ],
        },
      ],
    },
  ];
  const dataHomeTags = [
    {
      title: "Top Fanfic Tags",
      tags: [
        { name: "Action" },
        { name: "Adventure" },
        { name: "Comedy" },
        { name: "Drama" },
        { name: "Fantasy" },
        { name: "Horror" },
        { name: "Mystery" },
        { name: "Romance" },
        { name: "Sci-fi" },
        { name: "Slice of Life" },
      ],
    },
    {
      title: "Popular Tags",
      tags: [
        { name: "Action" },
        { name: "Adventure" },
        { name: "Comedy" },
        { name: "Drama" },
        { name: "Fantasy" },
        { name: "Horror" },
        { name: "Mystery" },
        { name: "Romance" },
        { name: "Sci-fi" },
        { name: "Slice of Life" },
      ],
    },
  ];
  const [showAll, setShowAll] = useState(false);

  const [is_loading, setIsLoading] = useState(false);

  const [numberList, setNumberList] = useState(5);
  const extendMoreRanking = () => {
    setShowAll(!showAll);
    setNumberList(numberList === 5 ? 10 : 5);
  };

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
  useEffect(() => {
    const newFilter = {
      ...filter,
      sortField: "powerStone",
      sortOrder: "desc",
      pageSize: 10,
    };

    setIsLoading(true);
    getNovels(newFilter).then((data) => {
      setNovelData(data);
      setListNovel((prevState) => ({
        ...prevState,
        topranking: data.novels,
      }));
      setPage({
        currentPage: data.page.currentPage,
        totalPages: data.page.totalPages,
      });
      setIsLoading(false);
    });
  }, []);

  return !is_loading ? (
    <div className=" flex flex-col justify-end items-center w-screen max-w-[1080px]">
      <Banner />
      <div className="flex flex-col w-full  pb-12 ">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Top Fanfic Books
          </h1>
          <a
            className="uppercase text-blue-600 text-[16px] hover:underline hover:cursor-pointer "
            href="/ranking/fanfic/..."
          >
            More
          </a>
        </div>
        <div className="flex flex-col justify-between">
          <div className="list-ranking grid grid-cols-3">
            <EachRanking
              dataEachRanking={listNovel?.topranking}
              numberList={numberList}
              rank_tilte="Power Ranking"
            />
            <EachRanking
              dataEachRanking={listNovel?.weeklyfeatured}
              numberList={numberList}
              rank_tilte="Collection Ranking"
            />
            <EachRanking
              dataEachRanking={listNovel?.topranking}
              numberList={numberList}
              rank_tilte="Active Ranking"
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
      <HomeTags dataHomeTags={dataHomeTags[1]} />
      <div className="flex flex-col flex-wrap  pb-12 w-full">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Potential Starlet
          </h1>
        </div>
        <div className="grid grid-cols-8 space-between">
          {Array.from({ length: listNovel?.topranking?.length - 2 }).map(
            (_, index) => (
              <WeeklyItem key={index} items={listNovel?.topranking[index]} />
            )
          )}
        </div>
      </div>
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
          {Array.from({ length: listNovel?.weeklyfeatured?.length - 2 }).map(
            (_, index) => (
              <WeeklyItem
                key={index}
                items={listNovel?.weeklyfeatured[index]}
              />
            )
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
