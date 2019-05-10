import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventList extends Component {
    renderEvents(event) {    
    return<Link key={event.eventId} to={`/events/${event.eventId}`}><h3>{event.eventName}</h3></Link>
    }
 
  render() {
    const { events } = this.props
    console.log(events, "this.props.events Eventlist Comp")
    return(
            <div>
              <h1>All Events</h1>
              <div>    
                {events &&
                <ul>
                {events.map(events =>
                    <li key={events.id} className="event"><a href={`/events/${events.eventId}`}><img src = {events.image_url}  width="300" height="150" alt="event"/></a>
                    <br></br>
                    <div class="eventname">{this.renderEvents(events)}<br></br></div></li>
                    )}
                </ul>
                }
              </div>
              There are currently { events.length } upcoming events.
            </div>)
  }
}