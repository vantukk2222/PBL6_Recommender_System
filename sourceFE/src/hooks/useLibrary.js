import { useContext } from "react";
import LibraryContext from "../context/libraryContext";

const useLibrary = () => {
    const context = useContext(LibraryContext);

    if (context === undefined) {
        throw new Error("useLibrary must be used within a LibraryProvider");
    }

    return context;
};

export default useLibrary;
