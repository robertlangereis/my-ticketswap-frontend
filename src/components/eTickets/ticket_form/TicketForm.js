import React from 'react'
import './TicketForm.css'

export default (props) => {
    const { onSubmit, onChange, values } = props  
    return (
        <form className={'TicketForm'} onSubmit={onSubmit}>
            <label htmlFor="content">Description</label>
            <textarea 
                type="text"
                name="ticketDescription" 
                key="ticketDescription" 
                value={values.ticketDescription}
                onChange={onChange}
                className='TicketForm_descr_textarea'>
            </textarea>
            <label htmlFor="price">Price</label>
            <input 
                type="price"
                key="price"
                name="price"
                value={values.price}
                onChange={onChange}
                className='TicketForm_price_textarea'>
            </input>
            <label htmlFor="content">Ticket Image URL</label>
            <input 
                type="text"
                name="imageUrl"
                key="imageUrl"
                value={values.imageUrl}
                onChange={onChange}
                className='TicketForm_picture_url_textarea'>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}
