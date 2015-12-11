import riot from 'riot'
import store, { actionSetTodos } from '../client/todo/todo-store.js'
riot.mixin('TodoStore', store)

export default data =>
  store.dispatch(actionSetTodos(data))
