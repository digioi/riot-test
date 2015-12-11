import { todos }        from 'reducers';
import { createStore }  from 'redux';

const initialState = window.__INITIAL_STATE__;
export default createStore(todos, initialState)
