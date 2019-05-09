import React from 'react'
import {connect} from 'react-redux'
import EventForm from './EventForm'
import {createEvent} from '../../../actions/events' 

class EventFormContainer extends React.Component {
  state = {
      name: '',
      description: '',
      image_url: '',
      start_date: '',
      end_date: ''
  }

  onChange = (event) => {
    // console.log('ad.target.name test:', event.target.name)
    // console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      description: '',
      image_url: '',
      start_date: '',
      end_date: ''
    })
    this.props.createEvent(this.state)
  }

  render() {
    return (<div>
      <h2>Submit a new Event:</h2>
    <EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    /></div>)
  }
}

export default connect(null, {createEvent})(EventFormContainer)