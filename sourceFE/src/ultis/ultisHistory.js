
import apiHistory from '../api/apiHistory';
export const getHistories = async (account_ID, filter = {
    'page': 1,
    'pageSize': 10,
}) => {
    const response = await apiHistory.getHistorys(account_ID, filter);
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'histories': response.data.History
    }
    return data;
}

export const getHistory = async (id_account) => {
    if (id_account == null)
        return 'Id can not null';
    const response = await apiHistory.getHistory(id_account);
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'histories': response.data.histories
    }
    return data;
}

export const updateHistory = async (data) => {
    if (data.id == null)
        return 'Id can not null';
    const response = await apiHistory.updateHistory(data);
    return response;
}
export const addHistory = async (data) => {
    const response = await apiHistory.addHistory(data);
    return response;
}
export const deleteHistory = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiHistory.deleteHistory(id);
    return response;
}
export const deleteHistoriesByIDAccount = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiHistory.deleteHistoriesByAccount(id);
    return response;
}