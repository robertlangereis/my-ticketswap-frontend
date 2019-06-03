import React from 'react'
import {connect} from 'react-redux'
import {eventUpdate} from '../../../actions/events'
import EventForm from './EventForm'
import Button from '@material-ui/core/Button'

class EditEventFormContainer extends React.Component {
  state = { }

  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
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
    this.props.eventUpdate(this.props.event.eventId, this.state.formValues)
  }

  render() {
    return (<div>
    <Button variant="contained" color="primary" onClick={ this.onEdit }>Edit Event</Button>
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