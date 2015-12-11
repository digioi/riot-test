|var riot = require('riot')
todo-list(template='jade')
  ul
    li(each="{todo in todos}")
      todo-item(todo="{todo}")
  script.
    const store = this.mixin('TodoStore')
    this.todos = store.getState()
    store.subscribe( (state) => this.update() )
