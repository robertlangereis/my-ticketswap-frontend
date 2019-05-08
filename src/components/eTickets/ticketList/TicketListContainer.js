import React from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../../actions/tickets'
import TicketList from './TicketList'
import {getEvent} from '../../../actions/events'

// import TicketFormContainer from './advertisement_form/TicketFormFormContainer'

class TicketListContainer extends React.Component {
 

  render() {
    if (this.props.tickets){
    return<div> 
      <TicketList tickets={this.props.tickets}/> 
      {/* {console.log(this.props.tickets, "this.props.tickets Home Comp")} */}
      {/* <h1>Create a New Advertisement</h1> */}
      {/* <TicketFormFormContainer/> */}
      </div>}
    else return 'Loading tickets...'
}
    
}

const mapStateToProps = state => ({
  // tickets: state.eventtickets,
  // authenticated: state.currentUser !== null,
  // users: state.users === null ? null : state.users,
})

export default connect(mapStateToProps, {getTickets})(TicketListContainer)