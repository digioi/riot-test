import riot from 'riot'
import store from './todo-store.js'
import request from 'then-request'
import './todo-tags.js'

riot.mixin('TodoStore', store)
request('GET', '/recent').done(function (res) {
  console.log(JSON.parse(res.getBody()))
  riot.mixin('TodoStore').dispatch({
    type: 'SET_TODOS',
    payload: JSON.parse(res.getBody())
  })
  riot.mount('*')
});
