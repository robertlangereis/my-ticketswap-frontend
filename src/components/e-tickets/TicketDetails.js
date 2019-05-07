import React from 'react'
import EditTicketFormContainer from './EditTicketFormContainer';
import { Link } from 'react-router-dom'

export default (props) => {
    // console.log(props)
    const { ticket } = props  
    if (ticket){
    return (<div>
            <h1>{ticket.ticketName}</h1>
            <p>{ticket.ticketDescription}</p>
            <img src={ticket.image_url} width="300" height="150" alt={"ticket"}/>
            <br></br>
            <i>start date:{ticket.start_date}</i>
            <br></br>
            <i>end date:{ticket.end_date}</i>
            <br></br>
            {/* <button onClick={onDelete}>Delete Ticket</button> */}
            <br></br>
            <EditTicketFormContainer/>
            <button type="button">
                <Link style={{display: 'block', height: '100%'}} to={`/`}>HOME</Link>
            </button>
            </div>)    }
    else return 'Loading Ticket...'
}
