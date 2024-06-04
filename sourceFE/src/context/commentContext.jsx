import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CommentContext = createContext({});
export const CommentProvider = ({ children }) => {
  const [commentData, setCommentData] = useState([]);
  const [listComment, setListComment] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 10,
    sortField: "rating",
    sortOrder: "desc",
    accountId: "",
    novelId: "",
  });
  const [page, setPage] = useState({
    total: 0,
    totalPages: 1,
    currentPage: 1,
  });

  const contextCommentData = {
    commentData,
    setCommentData,
    listComment,
    setListComment,
    filter,
    setFilter,
    page,
    setPage,
  };
  return (
    <CommentContext.Provider value={contextCommentData}>
      {children}
    </CommentContext.Provider>
  );
};

CommentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CommentContext;
