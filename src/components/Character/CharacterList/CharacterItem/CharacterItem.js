import React from 'react'

const CharacterItem = ({name,species,image}) => {
    return (
        <div className="characters__item">
            <img src={image} alt={name} />
            <div className="characters__info">
                <p className='characters__name'>{name}</p>
                <span>{species}</span>
            </div>
        </div>
    )
}

export default CharacterItem
