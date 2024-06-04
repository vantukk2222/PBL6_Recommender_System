import { PropTypes } from "prop-types";
import { proxyUrl } from "../../api/apiProxy";
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
        <div className="flex flex-row flex-wrap w-full gap-3 justify-between pt-3">
          {dataRecommenderNovels?.slice(0, 6).map((item, index) => (
            <div className="flex flex-row w-[190px] " key={index}>
              <a href={"/content/" + item?._id}>
                <img
                  className=" rounded w-[65px] h-[90px] max-w-[65px] shadow-lg hover:underline   hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-102 duration-500"
                  key={index}
                  src={proxyUrl(item?.imageUrl)}
                  title={item?.name}
                />
              </a>
              <div className="flex flex-col ml-2">
                <a href={"/content/" + item?._id}>
                  <h3
                    className="font-bold text-[14px] text-left line-clamp-2 hover:underline cursor-pointer"
                    title={item?.name}
                  >
                    {item?.name}
                  </h3>
                </a>
                <a
                  className="text-[14px] text-gray-500  line-clamp-2 hover:underline hover:cursor-pointer"
                  title={
                    item?.category.name.charAt(0).toUpperCase() +
                    item?.category.name.slice(1)
                  }
                >
                  {item?.category.name.charAt(0).toUpperCase() +
                    item?.category.name.slice(1)}
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
  dataRecommenderNovels: PropTypes.array.isRequired,
};
