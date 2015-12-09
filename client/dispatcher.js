let _stores = []
exports const ADD_TODO = 'ADD_TODO';
exports const TOGGLE_TODO = 'TOGGLE_TODO';
exports const CLEAR_TODOS = 'CLEAR_TODOS';
exports const INIT_TODOS = 'INIT_TODOS';

exports const addStore = (store) => _stores.push(store);
exports const trigger = () => {
  let args = [].slice.call(arguments);
  console.log('dispatcher: trigger: ' + args);
  _stores.forEach(function(el) {
    el.trigger.apply(null, args)
  })
};

exports const one = (ev, cb) => _stores.forEach( el => el.one(ev, cb) );
exports const on = (ev, cb) => _stores.forEach( el => el.on(ev, cb) );
exports const off = (ev, cb) => _stores.forEach( el => {
  if (cb)
    el.off(ev, cb);
  else
    el.off(ev)
});
