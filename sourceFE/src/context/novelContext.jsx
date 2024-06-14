import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const NovelContext = createContext({});
export const NovelProvider = ({ children }) => {
  const [novelData, setNovelData] = useState([]);
  const [listNovel, setListNovel] = useState([]);
  const [idNovelRecommender, setIdNovelRecommender] = useState(() => {
    const savedId = localStorage.getItem("idNovelRecommender");
    try {
      return savedId ? JSON.parse(savedId) : {};
    } catch (e) {
      console.error("Failed to parse idNovelRecommender from localStorage:", e);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "idNovelRecommender",
        JSON.stringify(idNovelRecommender)
      );
    } catch (e) {
      console.error("Failed to save idNovelRecommender to localStorage:", e);
    }
  }, [idNovelRecommender]);
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 20,
    sortField: "views",
    sortOrder: "desc",
    categoryId: "",
    search: "",
  });
  const [page, setPage] = useState({
    totalPages: 1,
    currentPage: 1,
  });
  const [search, setSearch] = useState(() => {
    try {
      const savedSearch = localStorage.getItem("search") || "";
      return JSON.parse(savedSearch);
    } catch (e) {
      console.error("Failed to parse idNovelRecommender from localStorage:", e);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [search]);
  const contextNovelData = {
    novelData,
    setNovelData,
    listNovel,
    setListNovel,
    filter,
    setFilter,
    page,
    setPage,
    search,
    setSearch,
    idNovelRecommender,
    setIdNovelRecommender,
  };
  return (
    <NovelContext.Provider value={contextNovelData}>
      {children}
    </NovelContext.Provider>
  );
};

NovelProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NovelContext;
