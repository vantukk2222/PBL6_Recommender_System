import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const NovelContext = createContext({});
export const NovelProvider = ({ children }) => {
  const [novelData, setNovelData] = useState([]);
  const [listNovel, setListNovel] = useState([]);
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
    const savedSearch = localStorage.getItem("search");
    return savedSearch ? JSON.parse(savedSearch) : "";
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
