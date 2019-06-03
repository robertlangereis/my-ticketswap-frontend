import {GET_EVENT, UPDATE_EVENT_SUCCESS} from '../actions/events'
import {ADD_TICKET} from '../actions/tickets'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the event in an object with the event ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {

    case USER_LOGOUT:
      return null
  
    case GET_EVENT:
      return state = payload

    case ADD_TICKET:
      return {
          ...state,
        tickets: [...state.tickets, payload]
      }

    case UPDATE_EVENT_SUCCESS:
      return state = payload

    default:
      return state
  }
}
