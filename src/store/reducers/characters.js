import * as actionTypes from '../actions/actionTypes';

const initialState = {
    characters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CHARACTERS:
            return { ...state, characters: action.payload.characters };
        default:
            return state;
    }

};

export default reducer;