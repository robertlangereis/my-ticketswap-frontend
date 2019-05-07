import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_TICKET = 'ADD_TICKET'
export const UPDATE_TICKET = 'UPDATE_TICKET'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'

const updateTicket = ticket => ({
  type: UPDATE_TICKET,
  payload: ticket
})

const addTicket = ticket => ({
  type: ADD_TICKET,
  payload: ticket
})

const updateTicketSuccess = () => ({
  type: UPDATE_TICKET_SUCCESS
})


export const getTickets = (eventId) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/events/${eventId}/tickets/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateTicket(result.body))
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

export const updateTicket = (ticketId, data) => (dispatch, getState) => {
  console.log("action test")
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  Events
  .findByPk(req.params.id)
  .then(ticket => {
    if (!ticket) {
      return res.status(404).send({
        message: `ticket does not exist`
      })
    }
    return ticket.update(req.body).then(ticket => res.send(ticket))
  })
  .catch(error => next(error))
  request
    .put(`${baseUrl}/events/:id/tickets/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ data })
    .then(_ => dispatch(updateTicketSuccess()))
    .catch(err => console.error(err))
}
