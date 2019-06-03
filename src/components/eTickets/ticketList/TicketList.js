import React, { Component } from 'react'
import { Link } from '../../../../node_modules/react-router-dom'


export default class TicketList extends Component {
      
   renderTickets(ticket, eventId, user) {  
   return <Link to={`/events/${eventId}/tickets/${ticket.ticketId}`}><br></br>{ticket.ticketDescription}</Link>
    }
 
  render() {
    const { tickets } = this.props.event
    
    return(
            <div>
              <h1>All Tickets</h1>
              <div>    
                {this.props &&
                <ul>
                {tickets.map(tickets =>  
                    <li key={tickets.ticketId} 
                    className="ticket">Ticket Description: {this.renderTickets(tickets, this.props.event.eventId)} Price: {tickets.price}</li>)}
                </ul>
                }
              </div>
              There are currently { tickets.length } tickets available for this event.
            </div>)
  }
}