webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

	var _riot2 = _interopRequireDefault(_riot);

	var _todoStore = __webpack_require__(2);

	var _todoStore2 = _interopRequireDefault(_todoStore);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_riot2.default.mixin('TodoStore', _todoStore2.default);
	_riot2.default.mount('*');

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reducers = __webpack_require__(3);

	var _redux = __webpack_require__(5);

	var initialState = window.__INITIAL_STATE__;
	exports.default = (0, _redux.createStore)(_reducers.todos, initialState);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _todoReducer = __webpack_require__(4);

	Object.defineProperty(exports, 'todos', {
	  enumerable: true,
	  get: function get() {
	    return _todoReducer.default;
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	var defaultState = [];

	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_TODO':
	      return state.concat([action.payload]);
	    case 'TOGGLE_TODO':
	      action.payload.done = !action.payload.done;
	      return state;
	    case 'CLEAR_TODOS':
	      return state.filter(function (item) {
	        return !item.done;
	      });
	    default:
	      return state;
	  }
	}

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _riot = __webpack_require__(1);

	var _riot2 = _interopRequireDefault(_riot);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1)
	riot.tag2('todo-app', '<h3>Todos</h3> <todo-form></todo-form> <todo-list></todo-list>', '', '', function(opts) {
	});

/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
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
]);