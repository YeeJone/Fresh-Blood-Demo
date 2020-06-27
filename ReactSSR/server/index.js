import Koa from 'koa'
import fs from 'fs'
import regeneratorRuntime from "regenerator-runtime"
import { renderToString } from 'react-dom/server'
import Router from 'koa-router'
import React from 'react'
import App from '../client/pages/App'

const app = new Koa()
const router = new Router()

router.get('/home', async (ctx, next) => {
  const reactStr = renderToString(<App />)

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
  </head>
  <body>
      <div id="root">${reactStr}</div>
  </body>
  </html>`

  ctx.status = 200
  ctx.body = html
})

// router.get('/client', async (ctx, next) => {
//     ctx.status = 200
//     const client = fs.readdirSync(__dirname, '../dist/client')
//     ctx.body = html
// })

app.use(router.routes())

app.listen(9211, () => console.log('first ssr'))