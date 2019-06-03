import React from 'react'
import {connect} from 'react-redux'
// import {getTickets} from '../../../actions/tickets'
import TicketList from './TicketList'
import {getUsers} from '../../../actions/users'
// import {getEvent} from '../../../actions/events'

// import TicketFormContainer from './advertisement_form/TicketFormFormContainer'

class TicketListContainer extends React.Component {
 
componentDidMount() {
  // this.props.getTickets(params.ticketId)
  // this.props.getUsers()
}

  render() {
    if (this.props){
    return<div> 
      <TicketList event={this.props.event}/> 
      </div>}
    else return 'Loading tickets...'
}
    
}

const mapStateToProps = state => ({
  event: state.event,
  // tickets: state.eventtickets,
  // authenticated: state.currentUser !== null,
  // users: state.users === null ? null : state.users,
})

export default connect(mapStateToProps, {getUsers})(TicketListContainer)