import riot from 'riot'
import store from '../client/todo/todo-store.js'
riot.mixin('TodoStore', store)

export default (data)=>
  riot.mixin('TodoStore').dispatch({
    type: 'SET_TODOS',
    payload: data
  })
