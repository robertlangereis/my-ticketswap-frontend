import React from 'react'
import './EventForm.css'

export default (props) => {
    const { onSubmit, onChange, values } = props  
    return (
        <form className={'EventForm'} onSubmit={onSubmit}>
            <label htmlFor="name">Eventname</label>
            <input 
                type="text"
                name="eventName" 
                key="eventName" 
                value={values.name}
                onChange={onChange}
                className='EventForm_name_textarea'>
            </input>
            <label htmlFor="content">Description</label>
            <textarea 
                type="text"
                name="eventDescription" 
                key="eventDescription" 
                value={values.description}
                onChange={onChange}
                className='EventForm_descr_textarea'>
            </textarea>
            <label htmlFor="content">Image URL</label>
            <input 
                type="text"
                name="image_url"
                key="image_url"
                value={values.image_url}
                onChange={onChange}
                className='EventForm_image_url_textarea'>
            </input>
            <label htmlFor="datetime-local">Start Date</label>
            <input 
                type="datetime-local"
                name="start_date"
                key="start_date"
                value={values.start_date}
                onChange={onChange}
                className='EventForm_start_date_textarea'>
            </input>
            <label htmlFor="datetime-local">End Date</label>
            <input 
                type="datetime-local"
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
