import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_EVENT = 'ADD_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const UPDATE_EVENTS = 'UPDATE_EVENTS'
export const JOIN_EVENT_SUCCESS = 'JOIN_EVENT_SUCCESS'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'

const updateEvents = events => ({
  type: UPDATE_EVENTS,
  payload: events
})

const addEvent = event => ({
  type: ADD_EVENT,
  payload: event
})

const updateEventSuccess = () => ({
  type: UPDATE_EVENT_SUCCESS
})

const joinEventSuccess = () => ({
  type: JOIN_EVENT_SUCCESS
})


export const getEvents = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateEvents(result.body))
    })
    .catch(err => console.error(err))
}

export const createEvent = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addEvent(result.body)))
    .catch(err => console.error(err))
}

export const updateEvent = (eventId, commentId) => (dispatch, getState) => {
  console.log("action test")
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .patch(`${baseUrl}/events/${eventId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ commentId })
    .then(_ => dispatch(updateEventSuccess()))
    .catch(err => console.error(err))
}
