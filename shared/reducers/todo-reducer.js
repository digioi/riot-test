'use strict';

const defaultState = [];

export default function reducer(state=defaultState, action){
  switch(action.type){
    case 'ADD_TODO':
      return state.concat([action.payload])
    case 'TOGGLE_TODO':
      action.payload.done = !action.payload.done
      return state
    case 'CLEAR_TODOS':
      return state.filter( item => {
        return !item.done
      })
    default:
      return state
  }
}
