import React from 'react';

import heroImg from '../../assets/images/Hero.png'
const Hero =() => {
    return (
        <section className='container__section hero__section'>
            <div className="container__right hero__right">
                <img src={heroImg} alt="" />
            </div>
            <div className="container__left hero__left">
                <h1>
                    the rick <br />and morty<br />
                    API
                </h1>
                <button>about site</button>
            </div>
        </section>
    )
}
export default Hero
