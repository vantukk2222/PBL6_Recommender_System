import {  createContext, useState } from "react";
import PropTypes from 'prop-types';

const AccountContext = createContext({});
export const AccountProvider = ({children}) => {
    const [accountData, setAccountData] = useState({});
    const [listAccount, setListAccount] = useState([]);
    const [filter, setFilter] = useState({
        page : 1 , 
        pageSize : 20, 
        sortField : 'username',
        sortOrder:'desc',
        search:'',
    })
    const [page, setPage] = useState({
        totalPages :1,
        currentPage :1

    });

    const contextAccountData = {
       accountData,
       setAccountData,
       listAccount,
       setListAccount,
       filter,
       setFilter,
       page,
       setPage
    };
    return <AccountContext.Provider value={contextAccountData}>{children}</AccountContext.Provider>
};

AccountProvider.propTypes = {
    children : PropTypes.node.isRequired,
};
export default AccountContext;
