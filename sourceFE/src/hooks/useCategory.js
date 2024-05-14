import { useContext } from "react";
import CategoryContext from "../context/categoryContext";

const useCategory = () => {
    const cate = useContext(CategoryContext);
    return cate;
}

export default useCategory;