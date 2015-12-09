import riot from 'riot'

import TodoStore from './store.js';
import dispatcher from './dispatcher.js';

let todoStore = new TodoStore(dispatcher);
dispatcher.addStore(todoStore);

riot.mount('*', {store: todoStore})
