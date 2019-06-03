import React from 'react'
import {connect} from 'react-redux'
import {editTicket} from '../../../actions/tickets'
import TicketForm from './TicketForm'

class EditTicketFormContainer extends React.Component {
  state = { }

  onChange = (ticket) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ticket.target.name]: ticket.target.name.value
      }
    })
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        ticket_description: this.props.ticket_description,
        price: this.props.ticket.price,
        image_url: this.props.ticket.image_url
      }
    })
  }
  
  onSubmit = (ticket) => {
    ticket.preventDefault()
    this.setState({
      name: '',
      description: '',
      image_url: '',
      start_date: '',
      end_date: ''
    })
    this.props.editTicket(this.props.id, this.state.formValues)
  }
  render() {
    return (<div>
    <h1>Edit this Ticket
    </h1>
    <button onClick={ this.onEdit }>Edit Ticket</button>
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
  ticket: state.ticket
})

export default connect(mapStateToProps, {editTicket})(EditTicketFormContainer)