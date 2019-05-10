import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_EVENT = 'ADD_EVENT'
// export const UPDATE_EVENT = 'UPDATE_EVENT'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENT = 'GET_EVENT'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'

const updateEvents = events => ({
  type: GET_EVENTS,
  payload: events
})

const updateEvent = event => ({
  type: GET_EVENT,
  payload: event
})

const addEvent = event => ({
  type: ADD_EVENT,
  payload: event
})

const eventUpdateSuccess = () => ({
  type: UPDATE_EVENT_SUCCESS
})


export const getEvents = () => (dispatch, getState) => {
  // const state = getState()
  // console.log("action state", state.events)
  if (getState().events) return
  request
    .get(`${baseUrl}/events`)
    .then(result => {
      dispatch(updateEvents(result.body))
    })
    .catch(err => console.error(err))
}

export const getEvent = (eventId) => (dispatch) => {
  // console.log("action test - eventId:",eventId)
  // console.log("action test - request incoming:",request)
  request
  .get(`${baseUrl}/events/${eventId}`)
  .then(response => {
    if(response.ok){
      console.log("action test - response.body:",response.body)
      dispatch(updateEvent(response.body))
        }
        else{return "there was an error loading the event"}
    })
    .catch(err => console.error(err))
}

export const createEvent = (eventName, eventDescription, image_url, start_date, end_date) => (dispatch, getState) => {
  const state = getState()
  console.log("action test - STATE:",state)
  const jwt = state.currentUser.jwt
  console.log("action test - JWT:",jwt)
  if (isExpired(jwt)) return dispatch(logout())
  console.log("survived JWT")
  // console.log("something")
  request
  .post(`${baseUrl}/events`)
  .set('Authorization', `Bearer ${jwt}`)
  .send({
    eventName: 'dingen', 
    eventDescription: 'dingen', 
    image_url: 'www.a.nl', 
    start_date: 'datum',
    end_date: 'eind-datum'})
  .then(result => {
    if(result.ok){
    console.log("action test - response.body:",result.body)
    dispatch(addEvent(result.body)) 
  }
  else {return "there was an error creating the event"}
  })
    .catch(err => console.error(err))
}
//
export const eventUpdate = (eventId, commentId) => (dispatch, getState) => {
  console.log("action test")
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .patch(`${baseUrl}/events/${eventId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ commentId })
    .then(_ => dispatch(eventUpdateSuccess()))
    .catch(err => console.error(err))
}
