import { ItemRanking } from "./ItemRanking";
import "./css/eachRanking.css";
import banner1 from "../../assets/images/banner1.jpg";

export const EachRanking = ({ data, numberList }) => {
  const eachItemRanking = {
    image: banner1,
    title: "Endless Path : Infinite Cosmos",
    category: "Anime & Comics",
    rating: 4.8,
  };
  
  return (
    <>
      <div className="flex flex-col  w-[339px] h-fit">
        <h1 className="m-rank-title font-bold text-white text-left text-[20px] my-[20px] pt-[6px] pl-[8px] pr-[32px] ">
          Power Ranking
        </h1>
        <div className="flex flex-col">
          {Array.from({ length: numberList }, (_, i) => (
            <ItemRanking key={i} data ={eachItemRanking} rank={i + 1} />
          ))}
        </div>
      </div>
    </>
  );
};
