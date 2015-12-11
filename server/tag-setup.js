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
