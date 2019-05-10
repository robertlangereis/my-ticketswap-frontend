import {ADD_EVENT, GET_EVENTS, UPDATE_EVENT} from '../actions/events'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the events in an object with the event ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {

    case USER_LOGOUT:
      return null
    
    case ADD_EVENT:
      return {
        ...state,
        [payload.id]: payload
      }
    
    case UPDATE_EVENT:
      return {
        ...state,
        [payload.id]: payload
      }

    case GET_EVENTS:
      return state = payload
    // case GET_EVENTS:
    //   return payload.reduce((events, event) => {
    //     events[event.id] = event
    //     return events
    //   }, {})

    default:
      return state
  }
}
