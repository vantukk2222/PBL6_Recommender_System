import { ItemRanking } from "./ItemRanking";
import "./css/eachRanking.css";
import banner1 from "../../assets/images/banner1.jpg";
import { PropTypes } from "prop-types";
export const EachRanking = ({ dataEachRanking, numberList, rank_tilte }) => {
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
          {rank_tilte}
        </h1>
        <div className="flex flex-col">
          {dataEachRanking?.slice(0, numberList).map((itemData, i) => (
            <ItemRanking key={i} data={itemData} rank={i + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

EachRanking.propTypes = {
  dataEachRanking: PropTypes.array.isRequired,
  numberList: PropTypes.number.isRequired,
  rank_tilte: PropTypes.string.isRequired,
};
