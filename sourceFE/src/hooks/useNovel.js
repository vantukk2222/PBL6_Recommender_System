import { useContext } from "react";
import NovelContext from "../context/novelContext";

const useNovel = () => {
    const auth = useContext(NovelContext);
    return auth;
}

export default useNovel;