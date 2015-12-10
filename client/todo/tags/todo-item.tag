|var riot = require('riot')
todo-item(template='jade')
  span(class="{done: todo.done}" onclick="{toggle}") {todo.title}
  style(scoped type="text/css").
    :scope {
      cursor: pointer;
    }
    .done {
      text-decoration: line-through;
    }
  script.
    const store = this.mixin('TodoStore')
    this.todo = opts.todo
    console.log(this.todo, 'toggler')
    this.toggle = () => {
      console.log(this.todo, 'toggle')
      store.dispatch({type:'TOGGLE_TODO', payload: this.todo})
    }
