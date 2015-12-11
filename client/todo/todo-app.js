import riot from 'riot'
import store, { fetchToDos } from './todo-store.js'
import './todo-tags.js'

riot.mixin('TodoStore', store)
fetchToDos( () => riot.mount('*') );
