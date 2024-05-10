import {  createContext, useState } from "react";
import PropTypes from 'prop-types'

const AuthorContext = createContext({});
export const AuthorProvider = ({children}) => {
    const [authorData, setAuthorData] = useState([]);
    const [listAuthor, setListAuthor] = useState([]);
 
    const [page, setPage] = useState({
        totalPages :1,
        currentPage :1

    });

    const contextAuthorData = {
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
