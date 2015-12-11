import express from 'express'
import riot from 'riot'
import fs from 'fs'
fs.readdirSync(`${__dirname}/../client/todo/tags`).map((file)=> {
  const filename = `${__dirname}/../client/todo/tags/${file}`
  const src = riot.compile(require('fs').readFileSync(filename, 'utf8'), {
      type: 'babel',
      options: "{presets: ['es2015']}",
      template: 'jade'
  })

  module._compile(src, file)
})

import store from '../client/todo/todo-store.js'
riot.mixin('TodoStore', store)
const initalData = [
  {title: 'Cached Data :#'}
]

const app = express()
app.set('view engine', 'jade')
app.set('views', `${__dirname}/../views`)
app.use(express.static('dist'));
app.get('/', (req, res)=>{
  riot.mixin('TodoStore').dispatch({
    type: 'SET_TODOS',
    payload: initalData
  })

  const initialRender = riot.render('todo-app')
  res.render('index',{ initialRender })
})
app.get('/recent', (req,res) =>
  res.type('json').send(initalData)
)

app.listen(process.env.PORT || 3000, ()=> console.log('App Started ....'))
