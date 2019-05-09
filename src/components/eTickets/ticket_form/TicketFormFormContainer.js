import React from 'react'
import {connect} from 'react-redux'
import TicketForm from './TicketForm'
import {createTicket} from '../../../actions/events'
import TicketForm from './TicketForm';

class TicketFormContainer extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    address: '',
    pickup_possible: '',
    phone_nr: '',
    picture_url: '',
    email: '',
  }

  onChange = (ticket) => {
    // console.log('ticket.target.name test:', ticket.target.name)
    this.setState({
      [ticket.target.name]: ticket.target.value
    })
  }

  onSubmit = (ticket) => {
    ticket.preventDefault()
    this.setState({
      title: '',
      description: '',
      price: '',
      address: '',
      pickup_possible: '',
      phone_nr: '',
      picture_url: '',
      email: '',
    })
    this.props.createTicket(this.state)
  }

  render() {
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