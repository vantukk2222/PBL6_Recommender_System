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
  const [sortState, setSortState] = useState("newest");
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
      sortField: sortState === "newest" ? "updatedAt" : "rating",
      sortOrder: "desc",
      novelId: idCate,
    };

    getComments(newFilter).then((res) => {
      console.log("res: ", res);
      setListComment(res.comments);
      setIsLoadingComment(false);
      setPage({
        total: res.page.total,
        totalPages: res.page.totalPages,
        currentPage: res.page.currentPage,
      });
    });
  }, [idCate, page?.currentPage, sortState]);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col h-full w-full">
      <p
        onClick={() => {
          console.log(listComment);
        }}
      ></p>
      <div className="gap-2 border-y-[1px] border-slate-400 my-2 w-full flex">
        <div className="border-r-[1px] border-r-slate-400 p-2 flex-1">
          <RatingsDistribution data={{ axx: "123" }} />
        </div>
        <div className="flex-1">
          <RatingBar idCate={idCate} />
        </div>
      </div>

      <div className="flex flex-row gap-4 h-full px-6 pt-6 pb-2 text-[16px] font-semibold border-b-2	border-gray-300">
        <a
          className={
            " px-2 py-1 text-center  hover:scale-105 hover:cursor-pointer " +
            (sortState === "newest"
              ? " rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
              : "")
          }
          onClick={() => {
            setPage(1);
            setSortState("newest");
          }}
        >
          Newest
        </a>
        <a
          className={
            " px-2 py-1 text-center  hover:scale-105 hover:cursor-pointer " +
            (sortState !== "newest"
              ? " rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
              : "")
          }
          onClick={() => {
            setPage(1);
            setSortState("Popular");
          }}
        >
          Popular
        </a>
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
          pageIndex={page?.currentPage || 1}
          setPageIndex={setPage}
          pageCount={page?.totalPages || 1}
        />
      </div>
    </div>
  );
};

Comment.propTypes = {
  idCate: PropTypes.string,
};

export default Comment;
