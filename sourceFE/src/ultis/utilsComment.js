
import apiComment from "../api/apiComment";

export const getComments = async (filter = {
    'page': 1,
    'pageSize': 10,
    'sortField': 'rating',
    'sortOrder': 'desc'
}) => {
    const response = await apiComment.getComments(filter);
    const data = {
        'page': {
            'total': response.data.total,
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'comments': response.data.comments
    }
    return data;
}

export const getComment = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiComment.getComment(id);
    return response.data;
}
export const updateComment = async (data) => {
    if (data.id == null)
        return 'Id can not null';
    const response = await apiComment.updateComment(data);
    return response;
}
export const addComment = async (data) => {
    const response = await apiComment.addComment(data);
    return response;
}
export const deleteComment = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiComment.deleteComment(id);
    return response;
}