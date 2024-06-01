import React, { useEffect } from "react";
import RatingBar from "./RatingBar";
import { RatingsDistribution } from "./RatingsDistribution";
import { EachComment } from "./EachComment";
import PropTypes from "prop-types";
import useComment from "../../hooks/useComment";
import { getComments } from "../../ultis/utilsComment";
const Comment = ({ idCate }) => {
  const token = JSON.parse(localStorage.getItem("Token"));
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
    };

    getComments(newFilter).then((res) => {
      console.log("comments data: ", res);
      setListComment(res.comments);

      setPage({
        totalPages: res.page.totalPages,
        currentPage: res.page.currentPage,
      });
    });
  }, [idCate]);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col">
      <p
        onClick={() => {
          console.log(listComment);
        }}
      ></p>
      <div className="grid grid-cols-2 gap-2 border-y-[1px] border-slate-400 my-2">
        <div className="border-r-[1px] border-r-slate-400 p-2">
          <RatingsDistribution data={{ axx: "123" }} />
        </div>
        <div>
          <RatingBar idCate={idCate} />
        </div>
      </div>
      <div className="mt-8 w-full">
        {listComment?.map((item, index) => {
          return <EachComment key={index} comment={item} />;
        })}
      </div>
    </div>
  );
};

Comment.propTypes = {
  idCate: PropTypes.string,
};

export default Comment;
