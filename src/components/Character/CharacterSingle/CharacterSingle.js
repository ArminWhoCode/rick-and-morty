import React from 'react';
import { Link } from 'react-router-dom';


function CharacterSingle({ name, gender, status, species, image }) {
    return (
        <div className='character__container'>
            <div className='character__single'>
                <img src={image} alt={name} />
                <div className="character__data">
                    <p><span>name :</span> {name}</p>
                    <p><span>species :</span> {species}</p>
                    <p><span>gender :</span> {gender}</p>
                    <p><span>status :</span> {status}</p>
                </div>
            </div>
            <Link to='/characters'><button  className='btn-primary'>back to list</button></Link>
        </div>
    )
}

export default CharacterSingle
