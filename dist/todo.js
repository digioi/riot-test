webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

	var _riot2 = _interopRequireDefault(_riot);

	var _todoStore = __webpack_require__(2);

	var _todoStore2 = _interopRequireDefault(_todoStore);

	__webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_riot2.default.mixin('TodoStore', _todoStore2.default);
	(0, _todoStore.fetchToDos)(function () {
	  return _riot2.default.mount('*');
	});

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchToDos = exports.actionSetTodos = undefined;

	var _thenRequest = __webpack_require__(3);

	var _thenRequest2 = _interopRequireDefault(_thenRequest);

	var _redux = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function todos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_TODO':
	      state.push(action.payload);
	      return state;
	    case 'TOGGLE_TODO':
	      action.payload.done = !action.payload.done;
	      return state;
	    case 'SET_TODOS':
	      state = action.payload;
	      return state;
	    case 'CLEAR_TODOS':
	      return state.filter(function (item) {
	        return !item.done;
	      });
	    default:
	      return state;
	  }
	}

	var store = (0, _redux.createStore)(todos);
	exports.default = store;
	var actionSetTodos = exports.actionSetTodos = function actionSetTodos(data) {
	  return {
	    type: 'SET_TODOS',
	    payload: data
	  };
	};

	var fetchToDos = exports.fetchToDos = function fetchToDos(cb) {
	  store.dispatch({ type: 'LOADING_DATA' });
	  (0, _thenRequest2.default)('GET', '/recent').done(function (res) {
	    var actionObj = actionSetTodos(JSON.parse(res.getBody()));
	    console.log(actionSetTodos(JSON.parse(res.getBody())));
	    store.dispatch(actionObj);
	    cb();
	  });
	};

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

	var _riot2 = _interopRequireDefault(_riot);

	__webpack_require__(29);

	__webpack_require__(30);

	__webpack_require__(31);

	__webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1)
	riot.tag2('todo-app', '<h3>Todos</h3> <todo-form></todo-form> <todo-list></todo-list>', '', '', function(opts) {
	});

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1)
	riot.tag2('todo-form', '<form onsubmit="{add}"> <input name="input" type="text" placeholder="New Todo" autofocus="true"> <input type="submit" value="Add Todo"> </form> <button onclick="{clear}">Clear Completed</button>', '', 'template="jade"', function(opts) {
	  var _this = this;

	  var store = this.mixin('TodoStore');
	  this.add = function (e) {
	    if (_this.input.value) {
	      store.dispatch({ type: 'ADD_TODO', payload: { title: _this.input.value } });
	      _this.input.value = '';
	    }
	  };
	  this.clear = function (e) {
	    store.dispatch({ type: 'CLEAR_TODOS' });
	  };
	}, '{ }');

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1)
	riot.tag2('todo-item', '<span onclick="{toggle}" class="{done: done}">{title}</span>', 'todo-item,[riot-tag="todo-item"] { cursor: pointer; display: block; } todo-item .done,[riot-tag="todo-item"] .done { text-decoration: line-through; }', 'template="jade"', function(opts) {
	  var _this = this;

	  var store = this.mixin('TodoStore');
	  this.toggle = function () {
	    store.dispatch({ type: 'TOGGLE_TODO', payload: _this });
	  };
	}, '{ }');

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1)
	riot.tag2('todo-list', '<todo-item each="{todos}"></todo-item>', '', 'template="jade"', function(opts) {
	    var _this = this;

	    var store = this.mixin('TodoStore');
	    this.todos = store.getState();
	    store.subscribe(function (state) {
	        return _this.update();
	    });
	}, '{ }');

/***/ }

});