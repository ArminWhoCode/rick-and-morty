import React from 'react';
import { BsArrowRight } from "react-icons/bs";
const Service = ({title,text}) => {
    return (
        <div className="services__item">
            <h5>{title}</h5>
            <p>{text}</p>
            <BsArrowRight size='30' />
        </div>
    )
}

export default Service
