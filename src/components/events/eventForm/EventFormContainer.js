import React from 'react'
import {connect} from 'react-redux'
import EventForm from './EventForm'
import {createEvent} from '../../../actions/events' 

class EventFormContainer extends React.Component {
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

  onChange = (event) => {
    // console.log('ad.target.name test:', ad.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
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