import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {getEvent, getEvents} from '../../../actions/events'
import {getUsers} from '../../../actions/users'
import {getTickets} from '../../../actions/tickets'
import TicketListContainer from '../../eTickets/ticketList/TicketListContainer'
import TicketFormContainer from '../../eTickets/ticket_form/TicketFormContainer'

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
    this.props.getEvent(this.props.match.params.id)
    this.props.getEvents()
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }
  
  render() {
    return (
    <div>
      <div><EventDetails
      event={this.props.event}
      values={this.state}
      /></div>
    <br></br>
      <div>
        {this.props.event && <TicketListContainer event={this.props.event}/> }
        {this.props.event && <TicketFormContainer event={this.props.event}/>}
      </div>
    </div>)
  }
}

const mapStateToProps = state => ({
  event: state.event,
  events: state.events,
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
})

const mapDispatchToProps = {
  getUsers, getEvent, getTickets, getEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)