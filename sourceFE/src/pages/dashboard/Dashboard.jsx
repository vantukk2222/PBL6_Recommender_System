import React, { useEffect } from "react";
import { Banner } from "../../components/banners/Banner";
import { TopRanking } from "../../components/UI/TopRanking";
import banner1 from "../../assets/images/banner1.jpg";
import { HomeTags } from "../../components/Tags/HomeTags";
import { WeeklyItem } from "../../components/Cards/WeeklyItem";
import { SelectionImage } from "../../components/UI/selectionImage";
import { RecommenderNovels } from "../../components/UI/recommenderNovels";

import useNovel from "../../hooks/useNovel";
import { getNovel, getNovels } from "../../ultis/utilsNovel";
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


  const { 
    listNovel,
    setListNovel,
    filter,
    setFilter,
    page,
    setPage
  } = useNovel();
  
  // useEffect(()=>{
  //     getNovels(filter).then((res)=> {
  //       setListNovel(res.novels);
  //       setPage(res.page);
  //     });
  // },[])
  
  // useEffect(()=>{
  //   var id = '23901715324199104';
  //   getNovel(id).then((res)=>{
  //     console.log(res);
  //   })
  // },[])
  console.log('data novels',listNovel);
  return (
    <div className=" flex flex-col justify-end items-center w-screen max-w-[1080px]">
      <Banner />
      <TopRanking dataTopRanking={dataTopRanking[0]} />;
      <HomeTags dataHomeTags={dataHomeTags[1]} />
      <TopRanking dataTopRanking={dataTopRanking[1]} />;
      <div className="flex flex-col flex-wrap  pb-12 w-full">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Potential Starlet
          </h1>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <WeeklyItem key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <div style={{ flex: 6 }}>
          <SelectionImage
            dataSelectionImage={dataTopRanking[0]?.dataEachTopRanking[0]?.data}
          />
        </div>
        <div style={{ flex: 4 }}>
          <RecommenderNovels
            dataRecommenderNovels={
              dataTopRanking[0]?.dataEachTopRanking[0]?.data
            }
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
          {Array.from({ length: 8 }).map((_, index) => (
            <WeeklyItem key={index} />
          ))}
        </div>
      </div>
      <HomeTags dataHomeTags={dataHomeTags[1]} />
    </div>
  );
};

export default Dashboard;
