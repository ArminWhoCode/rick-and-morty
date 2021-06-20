import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getCharacters = (characters) => {
    return {
        type: actionTypes.GET_CHARACTERS,
        payload: { characters }
    };
};

export const fetchCharacters = () => {
    return dispatch => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                dispatch(getCharacters(response.data.results))
            })
            .catch(err => {
                dispatch(getCharacters(err))
            })
    }
}