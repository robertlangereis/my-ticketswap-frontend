import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getEvents} from '../../../actions/events'
import EventList from './EventList'
import {getUsers} from '../../../actions/users'
import EventFormContainer from '../eventForm/EventFormContainer'

class EventListContainer extends React.Component {
  componentDidMount() {
    if (this.props.users === null) this.props.getUsers()
    this.props.getEvents()
  }

  render() {
    const {users, authenticated, events} = this.props
    if (!authenticated) return (
			<Redirect to="/login" />
      )
    if (events === null || users === null) return 'No events at the moment. Create your own event using the form below!'

    if (this.props.events){
    return<div> 
      <EventList events={this.props.events}/> 
      <h1>Create a New Event</h1>
      <EventFormContainer/>
      </div>}
    else return 'Loading events...'
}
    
}

const mapStateToProps = state => ({
  events: state.events,
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
})

export default connect(mapStateToProps, {getEvents, getUsers})(EventListContainer)