import { useContext } from "react";
import AccountContext from "../context/accountContext";

const useAccount = () => {
    const acc = useContext(AccountContext);
    return acc;
}

export default useAccount;