import { createContext, useState } from "react";
import PropTypes from "prop-types";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historyData, setHistoryData] = useState({});
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 10,
  });
  const [page, setPage] = useState({
    totalPages: 1,
    currentPage: filter.page,
  });

  const contextHistoryData = {
    historyData,
    setHistoryData,
    filter,
    setFilter,
    page,
    setPage,
  };

  return (
    <HistoryContext.Provider value={contextHistoryData}>
      {children}
    </HistoryContext.Provider>
  );
};

HistoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HistoryContext;
