import riot from 'riot'
import store from './todo-store.js'
import './todo-tags.js'

riot.mixin('TodoStore', store)
riot.mount('*');
