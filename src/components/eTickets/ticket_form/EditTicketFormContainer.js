import React from 'react'
import {connect} from 'react-redux'
import {editTicket} from '../../../actions/tickets'
import TicketForm from './TicketForm'
import Button from '@material-ui/core/Button'

class EditTicketFormContainer extends React.Component {
  state = { }

  onChange = (ticket) => {
    
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ticket.target.name]: ticket.target.value
      }
    })
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        ticketDescription: this.props.ticket.ticketDescription,
        price: this.props.ticket.price,
        imageUrl: this.props.ticket.imageUrl
      }
    })
  }
  
  onSubmit = (ticket) => {
    ticket.preventDefault()
    this.setState({
      imageUrl: '',
      price: '',
      ticketDescription: '',
    })
    this.props.editTicket(this.props.event.eventId ,this.props.ticket.ticketId, this.state.formValues)
  }
  render() {
    return (<div>
    <Button variant="contained" color="primary" onClick={ this.onEdit }>Edit Ticket</Button>
    { this.state.editMode && 
    <TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state.formValues}
    />}
    </div>)
  }
}

const mapStateToProps = state => ({
  ticket: state.eventticket,
  event: state.event
})

export default connect(mapStateToProps, {editTicket})(EditTicketFormContainer)