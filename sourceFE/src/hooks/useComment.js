import { useContext } from "react";
import CommentContext from "../context/commentContext";

const useComment = () => {
    const comment = useContext(CommentContext);
    return comment;
}

export default useComment;