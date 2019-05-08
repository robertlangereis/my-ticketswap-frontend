import React, { Component } from 'react'
import { Link } from '../../../../node_modules/react-router-dom'

export default class TicketList extends Component {
   
  renderTickets(ticket) {  
      console.log(ticket)  
    return <Link to={`/events/:id/${ticket.ticketId}`}>{ticket.ticketDescription}</Link>
    }
 
  render() {
    const { tickets } = this.props
    console.log(this.props, "this.props Ticketlist Comp")
    return(
            <div>
              <h1>All Tickets</h1>
              <div>    
                {this.props &&
                <ul>{tickets.map(tickets =>
                    <li key={tickets.ticketId} className="ticket">{this.renderTickets(tickets)}</li>)}
                </ul>
                }
              </div>
              There are currently { tickets.length } tickets available for this event.
            </div>)
  }
}