|var riot = require('riot')
todo-item(template='jade')
  span(class="{done: done}" onclick="{toggle}") {title}
  style(scoped type="text/css").
    :scope {
      cursor: pointer;
      display: block;
    }
    .done {
      text-decoration: line-through;
    }
  script.
    const store = this.mixin('TodoStore')
    this.toggle = () => {
      store.dispatch({type:'TOGGLE_TODO', payload: this})
    }
