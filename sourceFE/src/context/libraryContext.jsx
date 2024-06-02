import { createContext, useState } from "react";
import PropTypes from "prop-types";

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [libraryData, setLibraryData] = useState({});
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 10,
  });
  const [page, setPage] = useState({
    totalPages: 1,
    currentPage: filter.page,
  });

  const contextLibraryData = {
    libraryData,
    setLibraryData,
    filter,
    setFilter,
    page,
    setPage,
  };

  return (
    <LibraryContext.Provider value={contextLibraryData}>
      {children}
    </LibraryContext.Provider>
  );
};

LibraryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LibraryContext;
