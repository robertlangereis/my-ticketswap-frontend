import React from 'react'
import './TicketForm.css'

export default (props) => {
    const { onSubmit, onChange, values } = props  
    return (
        <form className={'TicketForm'} onSubmit={onSubmit}>
            <label htmlFor="name">Ticketname</label>
            <input 
                type="text"
                name="title" 
                key="title" 
                value={values.title}
                onChange={onChange}
                className='TicketForm_title_textarea'>
            </input>
            <label htmlFor="content">Description</label>
            <textarea 
                type="text"
                name="description" 
                key="description" 
                value={values.description}
                onChange={onChange}
                className='TicketForm_descr_textarea'>
            </textarea>
            {/* <label htmlFor="price">Price</label>
            <input 
                type="price"
                key="price"
                name="price"
                value={values.price}
                onChange={onChange}
                className='TicketForm_price_textarea'>
            </input> */}
            <label htmlFor="content">Image URL</label>
            <input 
                type="text"
                name="picture_url"
                key="picture_url"
                value={values.picture_url}
                onChange={onChange}
                className='TicketForm_picture_url_textarea'>
            </input>
            <label htmlFor="datetime-local">Start Date</label>
            <input 
                type="datetime-local"
                name="start_date"
                key="start_date"
                value={values.start_date}
                onChange={onChange}
                className='TicketForm_start_date_textarea'>
            </input>
            <label htmlFor="datetime-local">End Date</label>
            <input 
                type="datetime-local"
                name="end_date"
                key="end_date"
                value={values.end_date}
                onChange={onChange}
                className='TicketForm_end_date_textarea'>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}
