import {  createContext, useState } from "react";
import PropTypes from 'prop-types'

const AuthorContext = createContext({});
export const AuthorProvider = ({children}) => {
    const [authorData, setAuthorData] = useState([]);
    const [listAuthor, setListAuthor] = useState([]);
    const [filter, setFilter] = useState({
        page : 1 , 
        pageSize : 20, 
        sortField : 'name',
        sortOrder:'desc'
    })
    const [page, setPage] = useState({
        totalPages :1,
        currentPage :1

    });

    const contextAuthorData = {
        filter,
        setFilter,
        authorData,
        setAuthorData,
        listAuthor,
        setListAuthor,
        page,
        setPage
    };
    return <AuthorContext.Provider value={contextAuthorData}>{children}</AuthorContext.Provider>
};

AuthorProvider.propTypes = {
    children : PropTypes.node.isRequired,
};
export default AuthorContext;
