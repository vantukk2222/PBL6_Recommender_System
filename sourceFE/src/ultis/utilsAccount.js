import apiAccount from "../api/apiAccount";

export const getAccounts = async (filter = {
    'page': 1,
    'pageSize': 4,
    'sortField': 'username',
    'sortOrder': 'desc'
}) => {
    const response = await apiAccount.getAccounts(filter);
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'accounts': response.data.accounts
    }
    return data;
}

export const getAccount = async (id) => {

    const response = await apiAccount.getAccount(id);
    return response.data;
}
export const updateAccount = async (data) => {
    const response = await apiAccount.updateAccount(data);
    return response;
}
export const addAccount = async (data) => {
    const response = await apiAccount.addAccount(data);
    return response;
}
export const deleteAccount = async (id) => {
    const response = await apiAccount.deleteAccount(id);
    return response;
}
export const addToLibrary = async (id_account, id_novel) => {
    const response = await apiAccount.addToFavorite(id_account, id_novel);
    return response;
}