import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sidebar: false,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SIDEBAR:
            return { ...state, sidebar: true }
        case actionTypes.CLOSE_SIDEBAR:
            return { ...state, sidebar: false }
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload.loading }
        default:
            return state;
    }
};

export default reducer;