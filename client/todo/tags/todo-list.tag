|var riot = require('riot')
todo-list(template='jade')  
  todo-item(each="{todos}")
  script.
    const store = this.mixin('TodoStore')
    this.todos = store.getState()
    store.subscribe( (state) => this.update() )
