import React from "react";
import PropTypes from "prop-types";

export const EachComment = ({ comment }) => {
  return (
    <>
      <div className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mt-4">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt={comment?.account?.username}
            />
            {comment?.account?.username}
          </p>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={
                  "w-4 h-4 me-1 " +
                  (index < comment?.rating
                    ? "text-yellow-500"
                    : "text-gray-300")
                }
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <div className="flex mt-3 ">
              <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-600">
                {comment?.rating}
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 ">{comment?.content}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            <svg
              className="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </div>
    </>
  );
};

EachComment.propTypes = {
  comment: PropTypes.object.isRequired,
};
