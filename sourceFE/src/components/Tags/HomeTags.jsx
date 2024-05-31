import { PropTypes } from "prop-types";
export const HomeTags = ({ dataHomeTags }) => {
  const number = dataHomeTags?.tags.length;
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
            {Array.from({ length: number }).map((_, index) => (
              <a
                className="text-[17px] font-bold text-blue-500 p-[17px] mb-[24px] mr-[24px] shadow-lg hover:underline hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                key={index}
              >
                {dataHomeTags?.tags[index]?.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

HomeTags.propTypes = {
  dataHomeTags: PropTypes.object.isRequired,
};
