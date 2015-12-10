var riot = require('riot')
var tags = require('./todo-tags.js')
var store = require('./todo-store.js')

riot.mixin('TodoStore', store)
riot.mount('*')
