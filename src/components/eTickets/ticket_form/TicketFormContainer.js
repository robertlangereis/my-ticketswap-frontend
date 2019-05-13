import React from 'react'
import {connect} from 'react-redux'
import TicketForm from './TicketForm'
import {createTicket} from '../../../actions/tickets'

class TicketFormContainer extends React.Component {
  state = {
    imageUrl: '',
    price: '',
    ticketDescription: '',
  }

  onChange = (ticket) => {
    this.setState({
      [ticket.target.name]: ticket.target.value
    })
  }

  onSubmit = (ticket) => {
    ticket.preventDefault()
    this.setState({
      imageUrl: '',
      price: '',
      ticketDescription: '',
    })
    this.props.createTicket(this.props.event.eventId, this.state)
  }
  
  render() {
    // console.log(this.props)
    return (<div>
      <h2>Submit a new Ticket for this Event:</h2>
    <TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    /></div>)
  }
}

export default connect(null, {createTicket})(TicketFormContainer)