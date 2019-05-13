import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_TICKET = 'ADD_TICKET'
export const GET_TICKETS = 'GET_TICKETS'
export const GET_TICKET = 'GET_TICKET'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'
export const UPDATE_TICKET = 'UPDATE_TICKET'

// export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'

const updateTickets = tickets => ({
  type: GET_TICKETS,
  payload: tickets
})

const updateTicket = ticket => ({
  type: GET_TICKET,
  payload: ticket
})

const addTicket = payload => ({
  type: ADD_TICKET,
  payload
})

const updateTicketSuccess = () => ({
  type: UPDATE_TICKET_SUCCESS
})


export const getTickets = (eventId) => (dispatch) => {
  request
    .get(`${baseUrl}/events/${eventId}/tickets/`)
    .then(response => {
      if(response.ok){
        dispatch(updateTickets(response.body))
          }
          else{return "there was an error loading the event"}
      })
      .catch(err => console.error(err))
  }

export const getTicket = (ticketId) => (dispatch) => {
  request
  .get(`${baseUrl}/events/${ticketId.eventId}/tickets/${ticketId}`)
  .then(response => {
    if(response.ok){
      dispatch(updateTicket(response.body))
        }
        else{return "there was an error loading the ticket"}
    })
    .catch(err => console.error(err))
}

export const createTicket = (eventId, data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
  .post(`${baseUrl}/events/${eventId}/tickets/`)
  .set('Authorization', `Bearer ${jwt}`)
  .send(data)
  .then(result => {
    console.log("rusult:", result)
    if(result.ok){
      console.log("dispatch createTicket Action, result.body:", result.body)
    dispatch(addTicket(result.body)) 
  }
  else {return "there was an error creating the event"}
  })
    .catch(err => console.error(err))
}


export const editTicket = (eventId, ticketId, data) => (dispatch, getState, next) => {
  console.log(eventId, "eventId", ticketId, "ticketId", data, "data")
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  // request
  // .findByPk(request.params.ticketId)
  // .then(ticket => {
  //   if (!ticket) {
  //     return ticket.status(404).send({
  //       message: `ticket does not exist`
  //     })
  //   }
  //   return ticket.update(request.body).then(ticket => request.send(ticket))
  // })
  // .catch(error => next(error))
  request
    .patch(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ data })
    .then(res => dispatch(updateTicketSuccess(res.body)))
    .catch(err => console.error(err))
}
