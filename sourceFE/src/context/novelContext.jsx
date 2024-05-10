import {  createContext, useState } from "react";
import PropTypes from 'prop-types'

const NovelContext = createContext({});
export const NovelProvider = ({children}) => {
    const [novelData, setNovelData] = useState([]);
    const [listNovel, setListNovel] = useState([]);
    const [filter , setFilter] = useState({
        page : 1,
        pageSize : 4,
        sortField : 'views',
        sortOrder:'desc'
    })
    const [page, setPage] = useState({
        totalPages :1,
        currentPage :1

    });

    const contextNovelData = {
        novelData,
        setNovelData,
        listNovel,
        setListNovel,
        filter,
        setFilter,
        page,
        setPage
    };
    return <NovelContext.Provider value={contextNovelData}>{children}</NovelContext.Provider>
};

NovelProvider.propTypes = {
    children : PropTypes.node.isRequired,
};
export default NovelContext;
