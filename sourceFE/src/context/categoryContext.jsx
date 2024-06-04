import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getallCategory } from "../ultis/utilsCategory";
import { useFetcher } from "react-router-dom";

const CategoryContext = createContext({});
export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryAll,setCategoryAll] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 20,
    sortField: "name",
    sortOrder: "desc",
    search:'',
  });
  const [page, setPage] = useState({
    totalPages: 1,
    currentPage: 1,
  });
  const [selectedCateIndex, setSelectedCateIndex] = useState(() => {
    const savedIndex = localStorage.getItem("selectedCateIndex");
    return savedIndex !== null ? JSON.parse(savedIndex) : 0;
  });
  useEffect(()=>{
    getallCategory().then((res)=>{
      console.log(res?.data?.categories);
      localStorage.setItem('categoryAll',JSON.stringify(res?.data?.categories))

    }).catch((err)=>{
      console.log("Error ",err);
    })
  },[])


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
    categoryAll,
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
