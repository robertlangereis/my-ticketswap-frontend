import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TicketList extends Component {
    renderTickets(ticket) {    
    return <Link to={`/events/${ticket.id}`}>{ticket.ticketName}</Link>
    }
 
  render() {
    const { tickets } = this.props
    // console.log(tickets, "this.props.tickets Ticketlist Comp")
    return(
            <div>
              <h1>All Tickets</h1>
              <div>    
                {tickets &&
                <ul>{tickets.map(tickets =>
                    <li key={tickets.id} className="ticket">{this.renderTickets(tickets)}</li>)}
                </ul>
                }
              </div>
              There are currently { tickets.length } upcoming tickets.
            </div>)
  }
}