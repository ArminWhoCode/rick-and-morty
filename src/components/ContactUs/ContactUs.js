import React from 'react';
import Form from './Form/Form'

import contactImg from '../../assets/images/contact.jpg'

const ContactUs = () => {
    return (
        <section className='container__section contact__section'>
            <div className="container__right contact__right">
                <img src={contactImg} alt="" />
            </div>
            <div className="container__left contact__left">
                <h1>
                    we'd love to <br />hear from you.
                </h1>
                <Form />
            </div>
        </section>
    )
}

export default ContactUs
