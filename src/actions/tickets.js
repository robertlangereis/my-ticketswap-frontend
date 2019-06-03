import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_TICKET = 'ADD_TICKET'
export const GET_TICKETS = 'GET_TICKETS'
export const GET_TICKET = 'GET_TICKET'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'
export const UPDATE_TICKET = 'UPDATE_TICKET'

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

const updateTicketSuccess = payload => ({
  type: UPDATE_TICKET_SUCCESS,
  payload
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
    if(result.ok){
    dispatch(addTicket(result.body)) 
  }
  else {return "there was an error creating the event"}
  })
    .catch(err => console.error(err))
}


export const editTicket = (eventId, ticketId, data) => (dispatch, getState, next) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .patch(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(res => dispatch(updateTicketSuccess(res.body)))
    .catch(err => console.error(err))
}
