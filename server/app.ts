import * as express from 'express'
import * as path from 'path'

(function startServer() {

  const app = express()

  app.set('port', process.env.PORT || 8080)

  app.use('/', express.static(path.join(__dirname, '../client')))

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })


  app.listen(app.get('port'), () => {
    console.log(`Started web app on port ${app.get('port')}`)
  })

})()
