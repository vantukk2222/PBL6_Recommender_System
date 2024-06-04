import { PropTypes } from "prop-types";
import "./css/selectionImage.css";
import { useEffect, useState } from "react";
import { proxyUrl } from "../../api/apiProxy";
import banner1 from "../../assets/images/banner1.jpg";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { addToLibrary } from "../../ultis/utilsAccount";
import { toast } from "react-toastify";
export const SelectionImage = ({ dataSelectionImage }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const infor = JSON.parse(localStorage.getItem("Token")) || {};

  const [isAddToLibrary, setIsAddToLibrary] = useState(false);
  const handleAddtoLibrary = (novel_id) => {
    setIsAddToLibrary(true);
    if (infor?.id) {
      addToLibrary(infor?.id, novel_id)
        .then(() => {
          setIsAddToLibrary(false);
          toast.success(`Add to library successfully`, {
            autoClose: 1000,
          });
        })
        .catch((error) => {
          setIsAddToLibrary(false);
          toast.error(`Failed to add to library: ${error.message}`, {
            autoClose: 1000,
          });
        });
    } else {
      alert("Please login to add to library");
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    if (dataSelectionImage && dataSelectionImage.length > 0) {
      setSelectedImage(dataSelectionImage[0]);
    }
  }, [dataSelectionImage]);
  return (
    <>
      <>
        <div className="flex flex-col w-full  pb-12 max-h-[420px] h-[420px]  pr-4">
          <div className="flex flex-row justify-between font-bold  ">
            <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
              Rising Fictions
            </h1>
          </div>
          <div className="flex flex-col justify-between pt-2 ml-4 bg-gray-100 h-full ">
            <div className="flex  flex-row w-[640px] max-w-[648px] justify-between">
              {dataSelectionImage?.map((item, index) => {
                if (index == 9) return null;
                return (
                  <img
                    className={`image-choose w-[60px] h-[80px]  max-w-[60px] max-h-[80px] mr-2 my-2  rounded ${
                      selectedImageIndex === index
                        ? "border-2 border-blue-500 p-[1px]  ease-in-out delay-100 hover:scale-100 duration-500 transition-transform"
                        : "hover:cursor-pointer transition ease-in-out delay-100  hover:scale-105 duration-500 transition-transform"
                    }`}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setSelectedImage(item);
                    }}
                    key={index}
                    src={proxyUrl(item?.imageUrl) || banner1}
                    alt={item.name || "Novel of the week"}
                  />
                );
              })}
            </div>
            <div className="flex flex-row py-2">
              <div className="mb-3">
                <img
                  className="w-[132px] h-[176px] max-w-[132px]  max-h-[176px]  rounded mr-3"
                  src={proxyUrl(selectedImage?.imageUrl) || banner1}
                  title={selectedImage?.name}
                />
              </div>

              <div className="flex flex-col">
                <a href={"/content/" + selectedImage?._id}>
                  <h3
                    className="font-bold text-[21px] text-left line-clamp-1 hover:underline cursor-pointer"
                    title={selectedImage?.name}
                  >
                    {selectedImage?.name || "Novel of the week"}
                  </h3>
                </a>
                <a className="">
                  <h1
                    className="font-light text-[14px] text-gray-400 hover:underline cursor-pointer mb-2"
                    title={capitalizeFirstLetter(selectedImage?.category?.name)}
                  >
                    {capitalizeFirstLetter(selectedImage?.category?.name) ||
                      "Fantasy"}
                  </h1>
                </a>
                <div>
                  <p className="line-clamp-3 text-[12px] text-gray-500 mb-2">
                    {selectedImage?.description}
                  </p>
                </div>
                <div className="flex flex-row">
                  <a
                    className="text-[16px] text-white uppercase bg-blue-600 w-fit px-2 py-1 mr-2 rounded-xl cursor-pointer hover:shadow-md	"
                    title="Read now"
                    href={"/content/" + selectedImage?._id}
                  >
                    Read now
                  </a>
                  <div
                    className="flex items-center justify-center w-[32px] h-[32px] pb-1 bg-blue-100 rounded-full hover:shadow-md hover:cursor-pointer"
                    title="Add to library"
                    onClick={() => {
                      handleAddtoLibrary(selectedImage?._id);
                    }}
                  >
                    <span className="text-blue-500 text-[34px] font-bold ">
                      {!isAddToLibrary ? "+" : "📚"}
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
  dataSelectionImage: PropTypes.array.isRequired,
};
