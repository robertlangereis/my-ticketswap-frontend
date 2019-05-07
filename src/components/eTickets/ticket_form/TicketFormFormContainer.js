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

  onChange = (ad) => {
    // console.log('ad.target.name test:', ad.target.name)
    this.setState({
      [ad.target.name]: ad.target.value
    })
  }

  onSubmit = (ad) => {
    ad.preventDefault()
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
    this.props.createAd(this.state)
  }

  render() {
    return (<div>
      <h2>Submit a new advertisement:</h2>
    <TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    /></div>)
  }
}

export default connect(null, {createAd})(TicketFormContainer)