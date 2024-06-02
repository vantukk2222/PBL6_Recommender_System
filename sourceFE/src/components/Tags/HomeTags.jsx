import { PropTypes } from "prop-types";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { getCategories } from "./../../ultis/utilsCategory";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { preProcessingCategory } from "../../ultis/preProcessingCategory";
export const HomeTags = () => {
  const [dataHomeTags, setDataHomeTags] = useState();
  useEffect(() => {
    getCategories().then((data) => {
      setDataHomeTags(data.categories);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col w-full  pb-12 ">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Popular Tags
          </h1>
          <a
            className="uppercase text-blue-600 text-[16px] hover:underline hover:cursor-pointer "
            href="/genres/novels/all"
          >
            More
          </a>
        </div>
        <div className="flex flex-col justify-between pt-2">
          <div className="flex  flex-wrap w-fit h-fit max-w-[1080px]  ">
            {dataHomeTags?.map((eachTags, idx) => (
              <a
                className="text-[17px] font-bold text-blue-500 p-[17px] mb-[24px] mr-[24px] shadow-lg hover:underline hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                key={idx}
                href={`/genres/novels/${preProcessingCategory(eachTags?.name)}`}
              >
                {capitalizeFirstLetter(eachTags?.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

HomeTags.propTypes = {};
