import React from 'react'
import EditEventFormContainer from '../eventForm/EditEventFormContainer';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';


export default (props) => {
    const { event } = props  
    if (event){
    return (<div>
            <br></br>
            <Link style={{display: 'block', height: '100%', color: 'primary'}} to={`/`}><Icon>home </Icon>Return to Eventlist</Link>
            <h1>{event.eventName}</h1>
            <p>{event.eventDescription}</p>
            <img src={event.image_url} width="300" height="150" alt={"event"}/>
            <br></br>
            <i>start date:{event.start_date}</i>
            <br></br>
            <i>end date:{event.end_date}</i>
            <br></br>
            <EditEventFormContainer/>
            </div>)    }
    else return 'Loading Events...'
}
