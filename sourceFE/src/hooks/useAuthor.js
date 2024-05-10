import { useContext } from "react";
import AuthorContext from "../context/authorContext";

const useAuthor = () => {
    const auth = useContext(AuthorContext);
    return auth;
}

export default useAuthor;