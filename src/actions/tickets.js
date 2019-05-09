import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_TICKET = 'ADD_TICKET'
export const GET_TICKETS = 'GET_TICKETS'
export const GET_TICKET = 'GET_TICKET'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'

// export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'

const updateTickets = tickets => ({
  type: GET_TICKETS,
  payload: tickets
})

const updateTicket = ticket => ({
  type: GET_TICKET,
  payload: ticket
})


const addTicket = ticket => ({
  type: ADD_TICKET,
  payload: ticket
})

const updateTicketSuccess = () => ({
  type: UPDATE_TICKET_SUCCESS
})


export const getTickets = (eventId) => (dispatch) => {
  // console.log("action tickets test eventID:",eventId)
  request
    .get(`${baseUrl}/events/${eventId}/tickets/`)
    .then(response => {
      if(response.ok){
        // console.log("action tickets test - response.body:",response.body)
        dispatch(updateTickets(response.body))
          }
          else{return "there was an error loading the event"}
      })
      .catch(err => console.error(err))
  }

export const getTicket = (ticketId) => (dispatch) => {
  // console.log("action test - eventId:",eventId)
  console.log("action test - ticketId:",ticketId)
  // const state = getState()
  // const jwt = state.currentUser.jwt
  // if (isExpired(jwt)) return dispatch(logout())
  // console.log("action getTicket test - request incoming:",request)
  request
  .get(`${baseUrl}/events/${ticketId.eventId}/tickets/${ticketId}`)
  .then(response => {
    if(response.ok){
      console.log("action test - GET_TICKET response.body:",response.body)
      dispatch(updateTicket(response.body))
        }
        else{return "there was an error loading the ticket"}
    })
    .catch(err => console.error(err))
}

export const createTicket = (eventId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/events/${eventId}/tickets/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addTicket(result.body)))
    .catch(err => console.error(err))
}

export const editTicket = (ticketId, data) => (dispatch, getState, next) => {
  console.log("action test")
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
  .findByPk(request.params.ticketId)
  .then(ticket => {
    if (!ticket) {
      return ticket.status(404).send({
        message: `ticket does not exist`
      })
    }
    return ticket.update(request.body).then(ticket => request.send(ticket))
  })
  .catch(error => next(error))
  request
    .put(`${baseUrl}/events/:id/tickets/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ data })
    .then(_ => dispatch(updateTicketSuccess()))
    .catch(err => console.error(err))
}
