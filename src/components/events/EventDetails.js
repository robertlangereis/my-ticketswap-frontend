import React from 'react'
import EditEventFormContainer from './EditEventFormContainer';
import { Link } from 'react-router-dom'

export default (props) => {
    // console.log(props)
    const { event, onDelete } = props  
    if (event){
    return (<div>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <img src={event.image_url}/>
            <i>{event.start_date}</i>
            <i>{event.end_date}</i>
            <button onClick={onDelete}>Delete Event</button>
            <br></br>
            <EditEventFormContainer/>
            <button type="button">
                <Link style={{display: 'block', height: '100%'}} to={`/`}>HOME</Link>
            </button>
            </div>)    }
    else return 'Loading Events...'
}
