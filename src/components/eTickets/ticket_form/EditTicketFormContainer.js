import React from 'react'
import {connect} from 'react-redux'
import {editTicket} from '../../../actions/tickets'
import TicketForm from './TicketForm'

class EditTicketFormContainer extends React.Component {
  state = { }

  onChange = (ticket) => {
    // update the formValues property with the new data from the input field
    // console.log(ticket.target.title, "ticket.target.title")
    // console.log(ticket.target.name, "ticket.target.name")
    // console.log(this.state, "this state")
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
        // name: this.props.ticket.name,
        // description: this.props.ticket.description,
        ticket_description: this.props.ticket_description,
        // start_date: this.props.ticket.start_date,
        // end_date: this.props.ticket.end_date
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
    console.log("onSubmit send. This.props.ticket.id" ,this.props.id, "this.state.value", this.state.formValues)
  }
  render() {
    console.log(this.props, "this.props")
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
  // tickets: state.tickets,
  ticket: state.ticket
})

export default connect(mapStateToProps, {editTicket})(EditTicketFormContainer)