import {ADD_EVENT, GET_EVENTS, UPDATE_EVENT} from '../actions/events'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the events in an object with the event ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {

    case USER_LOGOUT:
      return null

    case GET_EVENTS:
      return state = payload
  
    case ADD_EVENT:
      console.log("incoming add_event action at the reducers dispatched with state:", state, "and payload:", payload)
      return state = [...state, payload]

    case UPDATE_EVENT:
      return {
        ...state,
        [payload.eventId]: payload
      }
    default:
      return state
  }
}
