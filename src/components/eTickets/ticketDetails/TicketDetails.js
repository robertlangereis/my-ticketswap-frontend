import React from 'react'
import EditTicketFormContainer from '../ticket_form/EditTicketFormContainer';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';


export default (props) => {
    let color={
        green: false,
        orange: false,
        red: false
    }
    
    color = () => {
        if(color.green === true) return <h3 style={{color: "green"}}>"Low Fraud Risk"</h3>
        else if (color.orange === true) return <h3 style={{color: "orange"}}>"Note: Medium Fraud Risk"</h3>
        else if (color.red === true) return <h3 style={{ color: "red" }}>"NOTE: HIGH FRAUD RISK"</h3>
      }

    const { ticket, event } = props  
    
    if (ticket && event){
        if (ticket.fraudpercentage < 30) color.green = true
        else if (ticket.fraudpercentage > 30 && ticket.fraudpercentage < 60) color.orange = true 
        else if (ticket.fraudpercentage > 60) color.red = true 

    return (<div>
                <br></br>
                <Link style={{display: 'block', height: '100%', color: 'primary'}} to={`/`}><Icon>home </Icon>Return to Eventlist</Link>
            <h1>Eventname: {event.eventName}</h1>
            <p>Ticket description: {ticket.ticketDescription}</p>
            <h3>We calculated that the risk of this ticket being a fraud is: {ticket.fraudpercentage}%</h3>
            <div>{color()}</div>
            <img src={ticket.imageUrl} width="300" height="150" alt={"ticket"}/>
            <br></br>
            <h2>PRICE: €{ticket.price}</h2>
            <br></br>
            <EditTicketFormContainer/>
            </div>)    }
    else return 'Loading Ticket...'
}
