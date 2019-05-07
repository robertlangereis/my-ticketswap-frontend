import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventList extends Component {
    renderEvents(event) {    
    return <Link key={event.eventId} to={`/events/${event.eventId}`}>{event.eventName}</Link>
    }
 
  render() {
    const { events } = this.props
    // console.log(events, "this.props.events Eventlist Comp")
    return(
            <div>
              <h1>All Events</h1>
              <div>    
                {events &&
                <ul>{events.map(events =>
                    <li key={events.id} className="event">{this.renderEvents(events)}</li>)}
                </ul>
                }
              </div>
              There are currently { events.length } upcoming events.
            </div>)
  }
}