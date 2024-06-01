import PropTypes from "prop-types";
import { proxyUrl } from "../../api/apiProxy";
import { formatNumber } from "../../ultis/convertNumber";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { addToLibrary } from "../../ultis/utilsAccount";
import { useState } from "react";
import { toast } from "react-toastify";
export const EachItemHistories = ({ item }) => {
  const [isAddToLibrary, setIsAddToLibrary] = useState(false);
  const handleAddtoLibrary = () => {
    setIsAddToLibrary(true);
    addToLibrary(item?.account, item?.novel?._id)
      .then(() => {
        setIsAddToLibrary(false);
        toast.success("Add to library successfully", {
          autoClose: 1000,
        });
      })
      .catch((error) => {
        setIsAddToLibrary(false);
        toast.error(`Failed to add to library: ${error.message}`, {
          autoClose: 1000,
        });
      });
  };
  return (
    <>
      <li
        className="flex flex-row mb-8 hover:cursor-pointer"
        onClick={() => {
          window.location.href = "/content/" + item?.novel?._id;
        }}
      >
        <a
          className="overflow-hidden flex-none mr-6"
          href={"/content/" + item?.novel?._id}
          title={item?.novel?.name}
          data-report-eid="qi_B03"
          data-report-bid={item?.novel?._id}
        >
          <img
            data-original={proxyUrl(item?.novel?.imageUrl)}
            width="140"
            height="186"
            alt={item?.novel?.name}
            className="block"
            src={proxyUrl(item?.novel?.imageUrl)}
          />
        </a>
        <div className="flex-1 relative ">
          <h3 className="pt-1 mb-1 text-lg leading-6 font-bold truncate">
            <a
              className="text-black"
              href={"/content/" + item?.novel?._id}
              title={item?.novel?.name}
              data-report-eid="qi_B03"
              data-report-bid={item?.novel?._id}
            >
              {item?.novel?.name}
            </a>
          </h3>
          <p className="text-gray-600 mb-2">
            <a title="Views" href={"/content/" + item?.novel?._id}>
              {formatNumber(item?.novel?.views) + " Views"}
            </a>
          </p>

          <a
            href={"/content/" + item?.novel?._id}
            className="text-[16px] leading-6 text-black line-clamp-4 	 overflow-hidden"
            title={item?.novel?.description}
          >
            {item?.novel?.description}
          </a>
          <div className="absolute bottom-0 left-0 text-gray-600 text-sm">
            <strong className="text-xl">{item?.lastReadChapter}</strong>/
            {item?.novel?.chapters} Progress
          </div>
          <div className="absolute flex  bottom-0 right-0 text-[15px] gap-4">
            <a
              href={"/content/" + item?.novel?._id}
              className=" text-blue-500 hover:cursor-pointer flex flex-row h-fit mt-4"
              title="Continue Reading"
            >
              <span className="">Continue Reading</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                width="16px"
                height="16px"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
                xmlSpace="preserve"
                className="mt-[2px]"
              >
                <g>
                  <polyline
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                    strokeMiterlimit="10"
                    points="31,15 48,32    31,49  "
                  />
                </g>
                <g>
                  <polyline
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                    strokeMiterlimit="10"
                    points="16,15 33,32    16,49  "
                  />
                </g>
              </svg>
            </a>
            <a
              className="ml-1 hover:cursor-pointer rounded-2xl mt-4 text-blue-500 "
              title="Add to Library"
              onClick={(e) => {
                e.stopPropagation();
                handleAddtoLibrary();
              }}
            >
              {isAddToLibrary ? "Adding to library" : "Add to Library"}
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

EachItemHistories.propTypes = {
  item: PropTypes.object.isRequired,
};
