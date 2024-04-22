import { PropTypes } from "prop-types";
export const RecommenderNovels = ({ dataRecommenderNovels }) => {
  return (
    <>
      <div className="flex flex-col w-full  pb-12 ">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            Cheering reads
          </h1>
          <p
            className="uppercase text-blue-600 text-[16px] hover:underline hover:cursor-pointer "
            onClick={() => {
              console.log("Switch");
            }}
          >
            Switch
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="flex flex-row" key={index}>
              <a href="/content">
                <img
                  className=" rounded w-[70px] h-[80px] shadow-lg hover:underline   hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-102 duration-500"
                  key={index}
                  src={dataRecommenderNovels?.[index]?.image}
                />
              </a>
              <div className="flex flex-col ml-2">
                <a href="/content">
                  <h3 className="font-bold text-[14px] text-left line-clamp-2 hover:underline cursor-pointer">
                    {dataRecommenderNovels?.[index]?.nameOfNovel}
                  </h3>
                </a>
                <a className="text-[14px] text-gray-500  line-clamp-2 hover:underline hover:cursor-pointer">
                  {dataRecommenderNovels?.[index]?.category}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

RecommenderNovels.propTypes = {
  dataRecommenderNovels: PropTypes.object.isRequired,
};
