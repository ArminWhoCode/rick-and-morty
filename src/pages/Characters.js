import React, { useEffect } from 'react';
//components
import {Loader,CharacterList} from '../components'
//redux things
import { connect } from 'react-redux'
import { fetchCharacters } from '../store/actions/characters';
import { setLoading } from '../store/actions/ui';

const Characters = ({ characters, fetch, loading, turnLoading }) => {
    useEffect(() => {
        fetch();
    }, [fetch])
    useEffect(() => {
        characters.length === 0 ? turnLoading(true) : turnLoading(false)
    }, [characters,turnLoading])

    return (
        <>
            {loading ? <Loader /> : <CharacterList />}
        </>
    )
}
//pass state and dispath to props
const mapStateToProps = state => {
    return {
        characters: state.ch.characters,
        loading: state.ui.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchCharacters()),
        turnLoading: (bool) => dispatch(setLoading(bool))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
