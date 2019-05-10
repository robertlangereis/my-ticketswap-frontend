import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {getEvent} from '../../../actions/events'
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
    // if (this.props.event === null) this.props.getEvent(this.props.match.params.id)
    // if (this.props.event === null) this.props.getTickets(this.props.match.params.id)
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
    // console.log(this.props.getTickets(this.props.match.params.id), "this.props.getTickets(:id)")
    // console.log(this.props.getTickets(), "this.props.getTickets(:id)")
    // const getEvent = this.props.getEvent(this.props.match.params.id)
    // console.log("this.props.match.params.id bij EventDetailsCont",this.props.match.params.id)
  }
  
  render() {
    // console.log("this.props.events in EDC render is:", this.props.events)
    // console.log("this.props.event in EDC render is:", this.props.event)
    // console.log("this.props.tickets in EDC render is:", this.props.tickets)
    return (
    <div>
      <div><EventDetails
      event={this.props.event}
      values={this.state}
      /></div>
    <br></br>
      <div>
        {this.props.event && <TicketListContainer event={this.props.event}/> }
        {/* <div>{console.log(this.props.event, "event tickets EventDetailsContainer Comp")}</div> */}
        {/* {console.log(this.props.users, "this.props.event")} */}
        {this.props.event && <TicketFormContainer event={this.props.event}/>}
      </div>
    </div>)
  }
}

const mapStateToProps = state => ({
  event: state.event,
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
})

const mapDispatchToProps = {
  getUsers, getEvent, getTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)