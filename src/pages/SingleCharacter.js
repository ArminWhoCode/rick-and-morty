import axios from 'axios';
import React, { useEffect, useState } from 'react';
//components
import {Loader,CharacterSingle} from '../components'
//get id params for fetching
import { useParams } from 'react-router-dom';
//redux things
import { connect } from 'react-redux';
import { setLoading } from '../store/actions/ui';


const SingleCharacter = ({ loading, turnLoading }) => {
    const [character, setCharacter] = useState({})
    const { id } = useParams();
    useEffect(() => {
        turnLoading(true)
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                setCharacter(response.data);
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                turnLoading(false)
            })
    }, [id,turnLoading])
    return (
        <>
            {loading ? <Loader /> : <CharacterSingle {...character} />}
        </>
    )
}
//pass state and dispath to props
const mapStateToProps = state => {
    return {
        loading: state.ui.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        turnLoading: (bool) => dispatch(setLoading(bool))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCharacter)
