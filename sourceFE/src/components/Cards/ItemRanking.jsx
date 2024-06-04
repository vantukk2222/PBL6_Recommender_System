import PropTypes from "prop-types";
import { proxyUrl } from "../../api/apiProxy";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";

export const ItemRanking = ({ data, rank }) => {
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
  return (
    <>
      <div className="flex flex-row py-2">
        <a className="" href={"/content/" + data?._id}>
          <img
            className="w-[53px] h-[70px] max-w-[53px] max-h-[70px] rounded ease-in-out delay-100 hover:scale-105  duration-500 hover:-translate-y-1 hover:cursor-pointer"
            src={proxyUrl(data?.imageUrl)}
            title={data?.name}
          />
        </a>
        <div
          className={`number-ranking text-[16px] font-bold antialiased ${color} mx-2`}
        >
          <p>{rank < 10 ? "0" + rank : rank}</p>
        </div>
        <div className="flex flex-col">
          <a href={"/content/" + data?._id}>
            <h3
              className="font-bold text-[16px] text-left line-clamp-1 hover:underline cursor-pointer"
              title={data?.name}
            >
              {data?.name}
            </h3>
          </a>
          <a className="">
            <h1
              className="font-light	 text-gray-400 hover:underline cursor-pointer"
              title={capitalizeFirstLetter(data?.category?.name)}
            >
              {capitalizeFirstLetter(data?.category?.name)}
            </h1>
          </a>
          <strong className="flex flex-row justify-start w-fit	 items-center">
            <svg
              className="w-3 h-3 text-gray-400 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
            </svg>
            <span
              className="text-[12px]"
              onClick={() => {
                console.log("data in EachItemTopRanking: ", data);
              }}
            >
              {Number(data?.averageRating).toFixed(1)}
            </span>
          </strong>
        </div>
      </div>
    </>
  );
};

ItemRanking.propTypes = {
  data: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
};
