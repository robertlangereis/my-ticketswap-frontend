import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventList extends Component {
    renderEvents(event) {    
    return <Link to={`/events/${event.id}`}>{event.eventName}</Link>
    }
 
  render() {
    console.log(this.props.events, "this.props.events Eventlist Comp")
    const { events } = this.props
    return(
            <div>
              <h1>All Events</h1>
              <div>    
                {events && console.log(events, "events Eventlist Comp") &&
                <ul>{events.map(events =>
                    <li key={events.id} className="event">{this.renderEvents(events)}</li>)}
                </ul>
                }
              </div>
              {/* There are currently { events.length } upcoming events. */}
            </div>)
  }
}