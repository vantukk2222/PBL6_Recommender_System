import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoryContext = createContext({});
export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 4,
    sortField: "name",
    sortOrder: "desc",
  });
  const [page, setPage] = useState({
    totalPages: 1,
    currentPage: 1,
  });
  const [selectedCateIndex, setSelectedCateIndex] = useState(() => {
    const savedIndex = localStorage.getItem("selectedCateIndex");
    return savedIndex !== null ? JSON.parse(savedIndex) : 0;
  });

  useEffect(() => {
    localStorage.setItem(
      "selectedCateIndex",
      JSON.stringify(selectedCateIndex)
    );
  }, [selectedCateIndex]);

  const contextCategoryData = {
    categoryData,
    setCategoryData,
    listCategory,
    setListCategory,
    filter,
    setFilter,
    page,
    setPage,
    selectedCateIndex,
    setSelectedCateIndex,
  };

  return (
    <CategoryContext.Provider value={contextCategoryData}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryContext;
