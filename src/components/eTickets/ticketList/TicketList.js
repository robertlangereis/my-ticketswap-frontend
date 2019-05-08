import React, { Component } from 'react'
import { Link } from '../../../../node_modules/react-router-dom'

export default class TicketList extends Component {
   
  renderTickets(ticket, eventId) {  
    return <Link to={`/events/${eventId}/tickets/${ticket.ticketId}`}>{ticket.ticketDescription}</Link>  
    }
 
  render() {
    const { tickets } = this.props.event
    // const { event } = this.props
    console.log(this.props.event.eventId, "this.props Ticketlist Comp")
    // console.log(this.props && this.props.match.params.id, "Cannot read property 'params' of undefined")
    return(
            <div>
              <h1>All Tickets</h1>
              <div>    
                {this.props &&
                <ul>{tickets.map(tickets =>
                    <li key={tickets.ticketId} className="ticket">{this.renderTickets(tickets, this.props.event.eventId)}</li>)}
                </ul>
                }
              </div>
              There are currently { tickets.length } tickets available for this event.
            </div>)
  }
}