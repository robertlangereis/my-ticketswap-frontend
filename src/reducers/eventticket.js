import {GET_TICKET, UPDATE_TICKET_SUCCESS} from '../actions/tickets'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the event in an object with the event ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {

    case USER_LOGOUT:
      return null
  
    case GET_TICKET:
      return state = payload
    
    case UPDATE_TICKET_SUCCESS:
      return state = payload
      
    default:
      return state
  }
}
