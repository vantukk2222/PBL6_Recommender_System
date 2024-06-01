import React from "react";
import RatingBar from "./RatingBar";
import { RatingsDistribution } from "./RatingsDistribution";
import { EachComment } from "./EachComment";
const Comment = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2 border-y-[1px] border-slate-400 my-2">
        <div className="border-r-[1px] border-r-slate-400 p-2">
          <RatingsDistribution data={{ axx: "123" }} />
        </div>
        <div>
          <RatingBar />
        </div>
      </div>
      <div className="mt-8 w-full">
        {arr?.map((item, index) => {
          return <EachComment key={index} comment={arr} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
