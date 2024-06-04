import PropTypes from "prop-types";
import useComment from "../../hooks/useComment";
import useNovel from "../../hooks/useNovel";
export const RatingsDistribution = ({ data }) => {
  const {
    commentData,
    setCommentData,
    listComment,
    setListComment,
    filter,
    setFilter,
    page,
    setPage,
  } = useComment();

  const { novelData, setNovelData, listNovel, setListNovel } = useNovel();
  return (
    <>
      <div className="w-full">
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={
                index < Math.round(novelData?.averageRating)
                  ? "#EAB308"
                  : "gray"
              }
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <div className="flex mt-3 ">
            <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-600">
              {Number(novelData?.averageRating.toFixed(1))|| "NaN"}
            </p>
            <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-600">
              out of
            </p>
            <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-600">
              5
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="ms-1 text-lg font-semibold text-gray-500 dark:text-gray-600">
            Total:
          </p>
          <p className="mt-1 pl-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            {page?.total || "NaN"} global ratings
          </p>
        </div>

        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            5 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "70%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            70%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            4 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "17%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            17%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            3 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "8%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            8%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            2 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "4%" }}
            ></div>
          </div>

          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            4%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            1 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            1%
          </span>
        </div>
      </div>
    </>
  );
};
RatingsDistribution.propTypes = {
  data: PropTypes.object.isRequired,
};
