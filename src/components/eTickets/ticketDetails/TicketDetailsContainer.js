import React from 'react'
import {connect} from 'react-redux'
import TicketDetails from './TicketDetails'
import {getTicket} from '../../../actions/tickets'
import {userId} from '../../../jwt'
import {getUsers} from '../../../actions/users'
import {getEvent} from '../../../actions/events'

class TicketDetailsContainer extends React.Component {
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
    this.props.getTicket(this.props.match.params.ticketid)
    this.props.getEvent(this.props.match.params.id)
    this.props.getUsers()
  }
  
  render() {
    return (<div><TicketDetails
      ticket={this.props.ticket}
      event={this.props.event}
      values={this.state}
    /><br></br>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event,
  ticket: state.eventticket,
  // events: state.events,
  // tickets: state.tickets
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users
})


const mapDispatchToProps = {
  getUsers, getEvent, getTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsContainer)