import React from 'react'

const Form = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="email" placeholder='Email' />
            <textarea placeholder='Your message' cols="30" rows="10"></textarea>
            <button type='submit' className='btn-primary'>Send</button>
        </form>
    )
}

export default Form
