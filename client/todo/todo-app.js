var riot = require('riot')
var tags = require('./todo-tags.js')
import store from './todo-store.js'

riot.mixin('TodoStore', store)
riot.mount('*')
