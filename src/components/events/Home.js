import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../../actions/events'
import EventList from './EventList'
// import EventFormContainer from './advertisement_form/EventFormFormContainer'

class EventListContainer extends React.Component {
  componentDidMount() {
    // console.log('AdvertisementListContainer componentDidMount test!')
    this.props.getEvents()
  }

  render() {
    if (this.props.events){
    return<div> 
      <EventList events={this.props.events}/> 
      {/* {console.log(this.props.ads)} */}
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

export default connect(mapStateToProps, {getEvents})(EventListContainer)