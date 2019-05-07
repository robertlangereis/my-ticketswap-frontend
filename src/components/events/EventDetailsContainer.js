import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {getEvent} from '../../actions/events'
import {getTickets} from '../../actions/tickets'
import TicketListContainer from '../e-tickets/TicketListContainer'

class EventDetailsContainer extends React.Component {
  state = {
    formValues: {
      name: '',
      description: '',
      image_url: '',
      start_date: '',
      end_date: ''
    }
  }
  
  componentDidMount() {
    // if (this.props.event === null) this.props.getEvent(this.props.match.params.id)
    this.props.getEvent(this.props.match.params.id)
    this.props.getTickets(this.props.match.params.id)
    console.log(this.props.getTickets(1), "this.props.getTickets(1)")

    // const getEvent = this.props.getEvent(this.props.match.params.id)
    // console.log("this.props.match.params.id bij EventDetailsCont",this.props.match.params.id)
  }

  onDelete = () => {
    // this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }
  
  render() {
    // console.log("this.props.events in EDC render is:", this.props.events)
    // console.log("this.props.event in EDC render is:", this.props.event)
    // console.log("this.props.tickets in EDC render is:", this.props.tickets)
    return (
    <div>
      <div><EventDetails
      onDelete={this.onDelete}
      event={this.props.event}
      values={this.state}
      /></div>
    <br></br>
      <div>
        {/* <TicketListContainer events={this.props.tickets}/>  */}
        {console.log(this.props.tickets, "this.props.tickets EventDetailsContainer Comp")}
      </div>
    </div>)
  }
}

const mapStateToProps = state => ({
  event: state.event,
  events: state.events,
  tickets: state.tickets
})

export default connect(mapStateToProps, {getEvent, getTickets})(EventDetailsContainer)