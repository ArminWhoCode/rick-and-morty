import React from 'react';
import Service from './Service/Service';
import { services } from '../../data/constants';


const Services = () => {
    return (
        <div className='services__container'>
            <h2>Services</h2>
            <div className="services__list">
                {services.map((item) => (
                    <Service key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Services
