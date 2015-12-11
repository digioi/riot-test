import express from 'express'
import riot from 'riot'
import './tag-setup.js'
import store from './store-setup.js'

const app = express()
app.set('view engine', 'jade')
app.set('views', `${__dirname}/../views`)
app.use(express.static('dist'));

app.get('/', (req, res)=>{
  const initialState = store([
    {title: 'Cached Data :#'}
  ]).getState()
  const initialRender = riot.render('todo-app')
  res.render('index',{ initialRender, initialState })
})


app.listen(process.env.PORT || 3000, ()=> console.log('App Started ....'))
