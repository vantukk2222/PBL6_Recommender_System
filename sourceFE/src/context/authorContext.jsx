import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { getAllAuthor } from "../ultis/utilsAuthor";
const AuthorContext = createContext({});
export const AuthorProvider = ({children}) => {
    const [authorData, setAuthorData] = useState([]); // all data
    const [listAuthor, setListAuthor] = useState([]);
    const [filter, setFilter] = useState({
        page : 1 , 
        pageSize : 20, 
        sortField : 'name',
        sortOrder:'desc',
        search:'',
    })
    const [page, setPage] = useState({
        totalPages :1,
        currentPage :1

    });
   
    
    useEffect(()=>{
        getAllAuthor().then((res)=>{
            localStorage.setItem('authorsAll',JSON.stringify(res.data?.authors))
        }).catch((err)=>{
            console.log("can't get all author "+err);
        })
      },[])

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
