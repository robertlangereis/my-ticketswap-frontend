import {GET_EVENT} from '../actions/events'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the event in an object with the event ID as key
*/

export default (state = null, {type, payload}) => {
  // console.log("reducer test: ", type, payload)
  switch (type) {

    case USER_LOGOUT:
      return null
  
    case GET_EVENT:
    console.log("incoming")
      return state = payload

    default:
      return state
  }
}
