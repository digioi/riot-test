'use strict';
import request from 'then-request'
import { createStore } from 'redux'

function todos(state=[], action){
  switch(action.type){
    case 'ADD_TODO':
      state.push(action.payload)
      return state
    case 'TOGGLE_TODO':
      action.payload.done = !action.payload.done
      return state
    case 'SET_TODOS':
      state = action.payload
      return state
    case 'CLEAR_TODOS':
      return state.filter( item => {
        return !item.done
      })
    default:
      return state
  }
}

const store = createStore(todos)
export default store

export const actionSetTodos = data => (
  {
    type: 'SET_TODOS',
    payload: data
  }
)

export const fetchToDos = cb => {
  store.dispatch({type: 'LOADING_DATA'});
  request('GET', '/recent').done( res => {
    const actionObj = actionSetTodos(JSON.parse(res.getBody()))
    store.dispatch(actionObj)
    cb();
  })
}
