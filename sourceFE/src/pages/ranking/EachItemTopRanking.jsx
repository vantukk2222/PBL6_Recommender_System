import PropTypes from "prop-types";
import { formatNumber } from "./../../ultis/convertNumber";
import { proxyUrl } from "../../api/apiProxy";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { useState } from "react";
import { addToLibrary } from "../../ultis/utilsAccount";
import { toast } from "react-toastify";
import ImageWithPlaceholder from "./../../components/UI/ImagePlaceHolder";
export const EachItemTopRanking = ({ item, rank, sort }) => {
  const Token = JSON.parse(localStorage.getItem("Token"));

  const [isAddToLibrary, setIsAddToLibrary] = useState(false);
  const handleAddtoLibrary = () => {
    setIsAddToLibrary(true);
    if (Token?.id) {
      addToLibrary(Token.id, item?._id)
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
      setIsAddToLibrary(false);

      alert("Please login to add to library");
      window.location.href = "/login";
    }
  };
  let color;
  if (rank === 1) {
    color = "text-red-400	";
  } else if (rank === 2) {
    color = "text-orange-400	";
  } else if (rank === 3) {
    color = "text-emerald-400	";
  } else {
    color = "text-gray-400	";
  }
  const Url_image = proxyUrl(item?.imageUrl);
  return (
    <div className="flex flex-row h-[130px] max-h-[150px]">
      {rank !== 0 && (
        <div
          className={`number-ranking text-[16px] font-bold antialiased ${color} m-2`}
        >
          <p>{rank < 10 ? "0" + rank : rank}</p>
        </div>
      )}
      <div
        className="image_pund w-[90px] h-[120px]"
        onClick={() => {
          window.location.href = `/content/${item?._id}`;
        }}
      >
        <ImageWithPlaceholder
          classname="w-[90px] h-[120px] rounded ease-in-out delay-100 hover:scale-105  duration-500 hover:-translate-y-1 hover:cursor-pointer"
          source={Url_image}
          title_img={item?.name}
        />
      </div>
      <div className="content_pund w-[510px] max-w-[510px] flex flex-col pl-2">
        <a
          href={`/content/${item?._id}`}
          title={item?.name}
          className=" text-[16px] font-semibold max-w-[510px] truncate hover:underline hover:cursor-pointer mb-2"
        >
          {item?.name}
        </a>
        <p className="line-clamp-2 font-medium	text-gray-500 max-w-[510px] mb-2">
          {item?.description}
        </p>
        <p className="flex flex-row w-fit">
          {sort === "powerStone" && (
            <strong className="flex flex-row w-[60px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="mr-1 w-[16px] h-[16px] "
              >
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.807-4c-3.962-.923-4.266-5.1-2.743-7.077C8 10.21 8.59 9.8 9.147 9.412c.987-.687 1.874-1.304 2.265-3.412 3.048 1.846 2.388 6 2.388 6s1.879-1.077 1.27-3.538c4.266 3.692 1.828 8.307-.61 9.23-1.524.577-3.962-1.846-3.658-4.923-2.743 2.154-.61 5.231-.61 5.231z"
                  fill="#000"
                ></path>
              </svg>
              <span className="text-[12px] w-[40px] max-w-[40px] font-semibold text-gray-400">
                {formatNumber(item?.powerStone || 0)}
              </span>
            </strong>
          )}
          {sort === "views" && (
            <strong className="flex flex-row w-[60px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span className="text-[12px] w-[40px] max-w-[40px] font-semibold text-gray-400">
                {formatNumber(item?.views || 0)}
              </span>
            </strong>
          )}
          {sort === "averageRating" && (
            <strong className="flex flex-row w-[60px]">
              <svg
                className="w-4 h-4 text-[#EAB308] me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <span className="text-[12px] w-[40px] max-w-[40px] font-semibold text-gray-400">
                {formatNumber(item?.averageRating.toFixed(1) || 0)}
              </span>
            </strong>
          )}
          <i className="text-xs mx-1">|</i>
          <strong className="flex flex-row">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mr-1 w-[16px] h-[16px] "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2h10l6 6v14H4V2zm4 4h4v2H8V6zm8 6v-2H8v2h8z"
                fill="#000"
              ></path>
            </svg>
            <span className="text-[12px] font-semibold text-gray-400">
              {item?.chapters || "NaN"}
            </span>
          </strong>
          <i className="text-xs mx-1">|</i>
          <a
            href={"/genres/novels/" + item?.category?.name}
            title="Eastern"
            className="text-gray-500 align-middle font-normal leading-4 text-xs hover:underline hover:cursor-pointer"
          >
            {capitalizeFirstLetter(item?.category?.name)}
          </a>
        </p>
      </div>
      <div className="flex flex-row text-[14px] text-blue-500 items-center h-fit font-semibold uppercase">
        <a
          className="flex flex-row hover:cursor-pointer mr-3 py-2 space-x-1 h-fit"
          title="Add to library"
          onClick={() => {
            handleAddtoLibrary();
          }}
        >
          {!isAddToLibrary && (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-6">
              <path
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11-1H6v2h5v5h2v-5h5v-2h-5V6h-2v5z"
                fill="#004AF4"
              />
            </svg>
          )}
          <span>{isAddToLibrary ? "Adding..." : "ADD"}</span>
        </a>
        <a className="flex  hover:cursor-pointer text-white bg-blue-500 h-fit px-3 py-1 rounded-xl">
          <span>Read</span>
        </a>
      </div>
    </div>
  );
};

EachItemTopRanking.propTypes = {
  item: PropTypes.object.isRequired,
  rank: PropTypes.number,
  sort: PropTypes.string,
};
