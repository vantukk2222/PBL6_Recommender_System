import React, { useEffect, useState } from "react";
import RatingBar from "./RatingBar";
import { RatingsDistribution } from "./RatingsDistribution";
import { EachComment } from "./EachComment";
import PropTypes from "prop-types";
import useComment from "../../hooks/useComment";
import { getComments } from "../../ultis/utilsComment";
import { PaginationNav1Presentation } from "../pagination/PaginationNovel";
const Comment = ({ idCate }) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [is_LoadingComment, setIsLoadingComment] = useState(false);
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
    setIsLoadingComment(true);
    const newFilter = {
      page: page?.currentPage || 1,
      pageSize: 10,
      sortField: "rating",
      sortOrder: "desc",
      novelId: idCate,
    };

    getComments(newFilter).then((res) => {
      setListComment(res.comments);
      setIsLoadingComment(false);
      setPage({
        totalPages: res.page.totalPages,
        currentPage: res.page.currentPage,
      });
    });
  }, [idCate, page?.currentPage]);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col h-full">
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
      {is_LoadingComment && (
        <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
        </div>
      )}

      {!is_LoadingComment && (
        <div className="mt-8 w-full">
          {listComment?.map((item, index) => {
            return <EachComment key={index} comment={item} />;
          })}
        </div>
      )}
      <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
        <PaginationNav1Presentation
          pageIndex={page?.currentPage}
          setPageIndex={setPage}
          pageCount={page?.totalPages}
        />
      </div>
    </div>
  );
};

Comment.propTypes = {
  idCate: PropTypes.string,
};

export default Comment;
