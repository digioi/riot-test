import riot from 'riot'
import fs from 'fs'
import { todos } from '../shared/reducers/index.js'
import { createStore }  from 'redux';

export default (initialState = []) => {
  const store = createStore(todos, initialState);
  riot.mixin('TodoStore', store)
  return store
}
