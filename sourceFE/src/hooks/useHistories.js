import { useContext } from "react";
import HistoryContext from "../context/historiesContext";

const useHistory = () => {
    const context = useContext(HistoryContext);

    if (context === undefined) {
        throw new Error("useHistory must be used within a HistoryProvider");
    }

    return context;
};

export default useHistory;
