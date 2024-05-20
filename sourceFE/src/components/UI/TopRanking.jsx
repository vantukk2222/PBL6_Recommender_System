import { React, useState } from "react";
import { EachRanking } from "../Cards/EachRanking";
import PropTypes from "prop-types";

export const TopRanking = ({ dataTopRanking }) => {
  const [showAll, setShowAll] = useState(false);

  const [numberList, setNumberList] = useState(5);
  const extendMoreRanking = () => {
    setShowAll(!showAll);
    setNumberList(numberList === 5 ? 10 : 5);
  };

  return (
    <>
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
          <div className="list-ranking flex flex-row">
            {dataTopRanking?.dataEachTopRanking?.map(
              (eachItemEachDataTopRanking, index) => {
                return (
                  <EachRanking
                    dataEachRanking={eachItemEachDataTopRanking}
                    numberList={numberList}
                    key={index}
                  />
                );
              }
            )}
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
    </>
  );
};
TopRanking.propTypes = {
  dataTopRanking: PropTypes.object.isRequired,
};
