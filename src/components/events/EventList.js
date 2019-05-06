import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventList extends Component {
    renderAds(event) {    
    return <Link to={`/events/${event.id}`}>{event.eventName}</Link>
    }
 
  render() {
    // console.log(this.props.ads)
    const { events } = this.props
    return(
            <div>
              <h1>All Events</h1>
              <div>    
                {events &&
                <ul>{events.map(ads =>
                    <li key={events.id} className="ad">{this.renderAds(events)}</li>)}
                </ul>
                }
              </div>
              There are currently { events.length } upcoming events.
            </div>)
  }
}