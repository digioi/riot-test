'use strict';
import { createStore } from 'redux'
let initialState = []
function todos(state=initialState, action){
  console.log(state, action)
  switch(action.type){
    case 'ADD_TODO':
      state.push(action.payload)
      return state
    case 'TOGGLE_TODO':
      action.payload.done = !action.payload.done;
      return state
    case 'SET_TODOS':
      state = action.payload
      return state
    case 'CLEAR_TODOS':
      return state.filter(todoItem => !todoItem.done);
    default:
      return state
  }
}
export default createStore(todos)
