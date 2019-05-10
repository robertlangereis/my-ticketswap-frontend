import React from 'react'
import {connect} from 'react-redux'
import {eventUpdate} from '../../../actions/events'
import EventForm from './EventForm'

class EditEventFormContainer extends React.Component {
  state = { }

  onChange = (event) => {
    // update the formValues property with the new data from the input field
    // console.log(event.target.title, "event.target.title")
    // console.log(event.target.name, "event.target.name")
    // console.log(this.state, "this state")
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.name.value
      }
    })
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        eventName: this.props.event.eventName,
        eventDescription: this.props.event.eventDescription,
        image_url: this.props.event.image_url,
        start_date: this.props.event.start_date,
        end_date: this.props.event.end_date
      }
    })
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      eventName: '',
      eventDescription: '',
      image_url: '',
      start_date: '',
      end_date: ''
    })
    this.props.eventUpdate(this.props.event.id, this.state.formValues)
    console.log("onSubmit send. This.props.event.id" ,this.props.event.id, "this.state.value", this.state.formValues)
  }

  render() {
    return (<div>
    <h3>Edit this Event</h3>
    <button onClick={ this.onEdit }>Edit Event</button>
    { this.state.editMode && 
    <EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state.formValues}
    />}
    </div>)
  }
}

const mapStateToProps = state => ({
  events: state.events,
  event: state.event
})

export default connect(mapStateToProps, {eventUpdate})(EditEventFormContainer)