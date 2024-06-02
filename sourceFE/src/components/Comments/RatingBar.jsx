import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useComment from "../../hooks/useComment";
import PropTypes from "prop-types";
import { addComment, getComments } from "../../ultis/utilsComment";
const RatingBar = ({ idCate }) => {
  const Token = JSON.parse(localStorage.getItem("Token")) || null;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const [is_Comment, setIs_Comment] = useState(false);
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
  useEffect(() => {
    const newFilter = {
      page: 1,
      pageSize: 10,
      sortField: "rating",
      sortOrder: "desc",
      novelId: idCate,
      accountId: Token?.id,
    };

    const getCommentsByUser = async () => {
      await getComments(newFilter).then((res) => {
        setCommentData(res.comments[0]);
        setRating(res?.comments[0]?.rating);
        setComment(res?.comments[0]?.content);
      });
    };
    Token?.id && getCommentsByUser();
  }, [idCate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Token?.id) {
      toast.error("Please login to rate");
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
      return;
    }
    const dataComment = {
      _id: Math.floor(Date.now() / 1000),
      content: comment,
      novel: idCate,
      account: Token?.id,
      rating: rating,
    };
    try {
      const addCommentByUser = async () => {
        await addComment(dataComment).then((res) => {
          console.log("res: ", res);
          if (res.status === 200) {
            toast.success("Comment posted successfully");
            setCommentData(res.data);
          } else {
            toast.error(
              "Failed to post comment: " + res.message || "Unknown error"
            );
          }
        });
      };
      addCommentByUser();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while posting your comment");
    }
  };
  useEffect(() => {
    console.log("commentData updated: ", commentData);
  }, [commentData]);
  return (
    <div className="flex">
      <p
        className="text-xl font-semibold"
        onClick={() => {
          const dataComment = {
            _id: Math.floor(Date.now() / 1000),
            content: comment,
            novel: idCate,
            account: Token?.id,
            rating: rating,
          };
          console.log(commentData);
        }}
      >
        Your rating :
      </p>
      <div className="flex flex-col gap-4  pl-5">
        <form className="mb-6 w-80" onSubmit={handleSubmit}>
          <div className="flex items-center">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => {
                      if (!commentData) {
                        setRating(currentRating);
                      }
                    }}
                    className="hidden"
                  />
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    onMouseEnter={() => {
                      if (!commentData) {
                        setHover(currentRating);
                      }
                    }}
                    onMouseLeave={() => {
                      if (!commentData) {
                        setHover(null);
                      }
                    }}
                    className={
                      currentRating <= (hover || rating)
                        ? "cursor-pointer w-6 h-6 text-yellow-400 ms-1 "
                        : "cursor-pointer w-6 h-6 text-bronze-500 ms-1 "
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </label>
              );
            })}
          </div>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              disabled={commentData}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Share your thoughts with others..."
              required
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          {!commentData && (
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-600"
            >
              Post comment
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
RatingBar.propTypes = {
  idCate: PropTypes.string,
};
export default RatingBar;
