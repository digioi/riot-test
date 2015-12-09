import express from 'express'
import riot from 'riot'
import jadeTag, {compile as jadeTagCompile} from './allow-jade-tags.js'
let tags = []
require('fs').readdir('./views/tags', (err, data) => (
  data.forEach( (file) => {
    tags.push(`./views/tags/${file}`)
    jadeTag(`./views/tags/${file}`)
  })
))

const app = express()
app.set('view engine', 'jade')
app.set('views', `${__dirname}/views`)

app.get('/', (req, res)=>{
  const initialRender = riot.render('todo-app', { })
  res.render('index',{ initialRender })
})

app.get('/js/lib/riot.js', (req, res, next) => (
  require('fs').readFile(`${__dirname}/node_modules/riot/riot.js`, 'utf8', (err, content) => {
    res.type('application/javascript').send(content)
    next()
  })
))

app.get('/tags', (req, res, next)=>{
  res.type('application/javascript').send(
    tags.map( (file) => jadeTagCompile(file) ).join(' ')
  )
})


app.get('/tags/:filename', (req, res)=>{
  const path = `./views/tags/${req.params.filename}.tag.jade`
  res.type('application/javascript').send(jadeTagCompile(path))
})



app.listen(process.env.PORT || 3000, ()=> console.log('App Started ....'))
