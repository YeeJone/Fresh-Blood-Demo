const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const static = require('koa-static')
const Router = require('koa-router')

const app =  new Koa()

const router = new Router()

router.get('/', async ctx => {
  ctx.body = fs.readFileSync('./index.html', 'utf8')
})

router.get('/empty.js', async ctx => {
  await new Promise(resolve => setTimeout(resolve, 10000))
  ctx.body = fs.readFileSync('./empty.js', 'utf8')
})

app.use(router.routes())

app.listen(9712)