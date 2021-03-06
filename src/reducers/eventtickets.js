import {ADD_TICKET, GET_TICKETS} from '../actions/tickets'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the tickets in an object with the event ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null
    case ADD_TICKET:
      return {
        ...state,
        [payload.id]: payload
      }
    
    case UPDATE_TICKET:
      return {
        ...state,
        [payload.id]: payload
      }
    // case GET_TICKETS:
    // console.log("TICKETS REDUCER incoming. Payload:", payload)
    // return state = payload
    case GET_TICKETS:
      return payload.reduce((tickets, event) => {
          tickets[event.eventId] = event
          return tickets
        }, {})
      default:
      return state
  }
}
