import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../../../actions/events'
import EventList from './EventList'
import {getUsers} from '../../../actions/users'
// import EventFormContainer from './advertisement_form/EventFormFormContainer'

class EventListContainer extends React.Component {
  componentDidMount() {
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
    // console.log('Event Home componentDidMount test!')
    this.props.getEvents()
  }

  render() {
    console.log(this.props.authenticated, "this.props.authenticated")
    if (this.props.events){
    return<div> 
      <EventList events={this.props.events}/> 
      {/* {console.log(this.props.events, "this.props.events Home Comp")} */}
      {/* <h1>Create a New Advertisement</h1> */}
      {/* <EventFormFormContainer/> */}
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