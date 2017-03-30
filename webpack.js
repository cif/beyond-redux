import express from 'express'
import http from 'http'
import webpack from 'webpack'
import fs from 'fs'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import configify from './webpack.config.js'

const config = configify('./src/client.js')
const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

app.get('/example', (req, res) => {
  const exampleJson = {
    response: 'from the server!'
  }
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(exampleJson))
  res.end()
})

app.get('*', (req, res) => {
  // eslint-disable-next-line
  res.write(fs.readFileSync(path.join(__dirname, './public/index.html')))
  res.end()
})

compiler.plugin('done', () => {
  Object.keys(require.cache).forEach((id) => {
    if (/[/\\]client[/\\]/.test(id)) delete require.cache[id]
  })
})

const server = http.createServer(app)
server.listen(3000, 'localhost', () => { })
