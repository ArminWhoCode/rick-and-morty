import * as actionTypes from './actionTypes';

export const open = () => {
    return {
        type: actionTypes.OPEN_SIDEBAR
    };
};

export const close = () => {
    return {
        type: actionTypes.CLOSE_SIDEBAR
    };
};
export const setLoading = (loading) => {
    return {
        type: actionTypes.SET_LOADING,
        payload: {loading}
    };
};