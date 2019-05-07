import React from 'react'
import EditEventFormContainer from '../eventForm/EditEventFormContainer';
import { Link } from 'react-router-dom'

export default (props) => {
    // console.log(props)
    const { event } = props  
    if (event){
    return (<div>
            <h1>{event.eventName}</h1>
            <p>{event.eventDescription}</p>
            <img src={event.image_url} width="300" height="150" alt={"event"}/>
            <br></br>
            <i>start date:{event.start_date}</i>
            <br></br>
            <i>end date:{event.end_date}</i>
            <br></br>
            {/* <button onClick={onDelete}>Delete Event</button> */}
            <br></br>
            <EditEventFormContainer/>
            <button type="button">
                <Link style={{display: 'block', height: '100%'}} to={`/`}>HOME</Link>
            </button>
            </div>)    }
    else return 'Loading Events...'
}
