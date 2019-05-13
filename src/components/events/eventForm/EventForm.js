import React from 'react'
import './EventForm.css'

export default (props) => {
    const { onSubmit, onChange, values } = props  
    return (
        <form className={'EventForm'} onSubmit={onSubmit}>
            <label htmlFor="name" style={{color:'white'}}>Eventname </label>
            <input 
                type="text"
                name="eventName" 
                key="eventName" 
                value={values.eventName}
                onChange={onChange}
                className='EventForm_name_textarea'>
            </input>
            <br></br>
            <label htmlFor="content" style={{color:'white'}}>Description </label>
            <textarea 
                type="text"
                name="eventDescription" 
                key="eventDescription" 
                value={values.eventDescription}
                onChange={onChange}
                className='EventForm_descr_textarea'>
            </textarea>
            <br></br>
            <label htmlFor="content" style={{color:'white'}}>Image URL </label>
            <input 
                type="text"
                name="image_url"
                key="image_url"
                value={values.image_url}
                onChange={onChange}
                className='EventForm_image_url_textarea'>
            </input>
            <br></br>
            <label htmlFor="string" style={{color:'white'}}>Start Date </label>
            <input 
                type="text"
                name="start_date"
                key="start_date"
                value={values.start_date}
                onChange={onChange}
                className='EventForm_start_date_textarea'>
            </input>
            <br></br>
            <label htmlFor="date" style={{color:'white'}}>End Date </label>
            <input 
                type="text"
                name="end_date"
                key="end_date"
                value={values.end_date}
                onChange={onChange}
                className='EventForm_end_date_textarea'>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}
