import React from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../../actions/tickets'
import TicketList from './TicketList'

// import TicketFormContainer from './advertisement_form/TicketFormFormContainer'

class TicketListContainer extends React.Component {
  componentDidMount() {
    // console.log('Ticket Home componentDidMount test!')
    // const Eventid = this.props.getEvent(this.props.match.params.id)
    this.props.getTickets()
  }

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
  tickets: state.eventtickets,
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
})

export default connect(mapStateToProps, {getTickets})(TicketListContainer)