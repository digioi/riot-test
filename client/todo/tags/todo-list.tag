|var riot = require('riot')
todo-list(template='jade')
  ul
    li(each="{todo in todos}")
      todo-item(todo="{todo}")
  script.
    const store = this.mixin('TodoStore')
    this.todos = store.getState()
    store.subscribe( (state) => {
      console.log('update should occur', store.getState(), state)
      this.todos = store.getState()
      this.update()
    })
