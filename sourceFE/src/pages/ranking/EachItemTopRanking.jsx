import PropTypes from "prop-types";
import { formatNumber } from "./../../ultis/convertNumber";
import { proxyUrl } from "../../api/apiProxy";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
export const EachItemTopRanking = ({ item, rank }) => {
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
      <div
        className={`number-ranking text-[16px] font-bold antialiased ${color} m-2`}
      >
        <p>{rank < 10 ? "0" + rank : rank}</p>
      </div>{" "}
      <div className="image_pund w-[90px] h-[120px]">
        <img
          className="w-[90px] h-[120px] rounded ease-in-out delay-100 hover:scale-105  duration-500 hover:-translate-y-1 hover:cursor-pointer"
          src={Url_image}
          title={item?.name}
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
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-6">
            <path
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11-1H6v2h5v5h2v-5h5v-2h-5V6h-2v5z"
              fill="#004AF4"
            />
          </svg>
          <span>Add</span>
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
  rank: PropTypes.number.isRequired,
};
