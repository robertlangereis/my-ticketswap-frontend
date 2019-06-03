import React from 'react'
import './TicketForm.css'
import Button from '@material-ui/core/Button'

export default (props) => {
    const { onSubmit, onChange, values } = props  
    return (
        <form className={'TicketForm'} onSubmit={onSubmit}>
            <label htmlFor="content" style={{color:'white'}}>Description </label>
            <textarea 
                type="text"
                name="ticketDescription" 
                key="ticketDescription" 
                value={values.ticketDescription}
                onChange={onChange}
                className='TicketForm_descr_textarea'>
            </textarea>
            <br></br>
            <label htmlFor="price" style={{color:'white'}}>Price </label>
            <input 
                type="price"
                key="price"
                name="price"
                value={values.price}
                onChange={onChange}
                className='TicketForm_price_textarea'>
            </input>
            <br></br>
            <label htmlFor="content" style={{color:'white'}}>Ticket Image URL </label>
            <input 
                type="text"
                name="imageUrl"
                key="imageUrl"
                value={values.imageUrl}
                onChange={onChange}
                className='TicketForm_picture_url_textarea'>
            </input>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
    )
}
