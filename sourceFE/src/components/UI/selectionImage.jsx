import { PropTypes } from "prop-types";
import "./css/selectionImage.css";
import { useState } from "react";
export const SelectionImage = ({ dataSelectionImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <>
        <div className="flex flex-col w-full  pb-12 max-h-[420px] pr-4">
          <div className="flex flex-row justify-between font-bold  ">
            <h1
              className="text-2xl text-black font-bold mb-4 pb-6 "
              onClick={() => {
                console.log("data: ", dataSelectionImage[0].image);
              }}
            >
              {dataSelectionImage[0]?.nameOfNovel}
            </h1>
          </div>
          <div className="flex flex-col justify-between pt-2 ml-4 bg-slate-100">
            <div className="flex  flex-row overflow-x-auto  max-w-[648px]">
              {dataSelectionImage.map((item, index) => {
                console.log("item: ", item.image);
                // if (index == 0) return null;
                return (
                  <img
                    className={`image-choose w-[60px] h-[80px] mr-2 my-2  rounded ${
                      selectedImageIndex === index
                        ? "border-2 border-blue-500 p-[1px]  ease-in-out delay-100 hover:scale-100 duration-500 transition-transform"
                        : "hover:cursor-pointer transition ease-in-out delay-100  hover:scale-105 duration-500 transition-transform"
                    }`}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setSelectedImage(item);
                    }}
                    key={index}
                    src={item.image}
                    alt={item.nameOfNovel}
                  />
                );
              })}
            </div>
            <div className="flex flex-row py-2">
              <div className="">
                <img
                  className="w-[132px] h-[176px] rounded mr-3"
                  src={dataSelectionImage[0]?.image}
                  title={dataSelectionImage[0]?.nameOfNovel}
                />
              </div>

              <div className="flex flex-col">
                <a href="/content">
                  <h3
                    className="font-bold text-[21px] text-left line-clamp-1 hover:underline cursor-pointer"
                    title={selectedImage?.nameOfNovel}
                  >
                    {selectedImage?.nameOfNovel}
                  </h3>
                </a>
                <a className="">
                  <h1
                    className="font-light text-[14px] text-gray-400 hover:underline cursor-pointer mb-2"
                    title={selectedImage?.category}
                  >
                    {selectedImage?.category}
                  </h1>
                </a>
                <div className="flex flex-row">
                  <a
                    className="text-[16px] text-white uppercase bg-blue-600 w-fit px-2 py-1 mr-2 rounded-xl cursor-pointer hover:shadow-md	"
                    title="Read now"
                    href="/content"
                  >
                    Read now
                  </a>
                  <div
                    className="flex items-center justify-center w-[32px] h-[32px] pb-1 bg-blue-100 rounded-full hover:shadow-md hover:cursor-pointer"
                    title="Add to library"
                  >
                    <span className="text-blue-500 text-[34px] font-bold ">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

SelectionImage.propTypes = {
  dataSelectionImage: PropTypes.object.isRequired,
};
