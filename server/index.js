import express from 'express'
import riot from 'riot'
import './tag-setup.js'
import storeSetup from './store-setup.js'
const initalData = [
  {title: 'Cached Data :#'}
]
storeSetup(initalData)

const app = express()
app.set('view engine', 'jade')
app.set('views', `${__dirname}/../views`)
app.use(express.static('dist'));
app.get('/', (req, res)=>{
  const initialRender = riot.render('todo-app')
  res.render('index',{ initialRender })
})
app.get('/recent', (req,res) =>
  res.type('json').send(initalData)
)

app.listen(process.env.PORT || 3000, ()=> console.log('App Started ....'))
