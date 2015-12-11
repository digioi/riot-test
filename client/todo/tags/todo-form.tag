| var riot = require('riot')
todo-form(template='jade')
  form(onsubmit="{add}")
    input(name="input" type="text" placeholder="New Todo" autofocus="true")
    input(type="submit" value="Add Todo")
  button(onclick="{clear}") Clear Completed
  script.
    const store = this.mixin('TodoStore')
    this.add = (e) => {
      if (this.input.value) {
        store.dispatch({type: 'ADD_TODO', payload: {title: this.input.value}})
        this.input.value = ''
      }
    }
    this.clear = (e) => {
      store.dispatch({type: 'CLEAR_TODOS'})
    }
