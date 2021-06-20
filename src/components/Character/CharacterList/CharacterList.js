import React from 'react';
import CharacterItem from './CharacterItem/CharacterItem';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const CharacterList = ({ characters }) => {
    return (
        <div className='characters__container'>
            <h1 className='characters__header'>Characters</h1>
            <div className="characters__list">
                {characters.map((character) => (
                    <Link key={character.id} to={'/characters/' + character.id}>
                        <CharacterItem
                            name={character.name}
                            species={character.species}
                            image={character.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { characters: state.ch.characters }
}

export default connect(mapStateToProps)(CharacterList)
