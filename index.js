const logger = require('koa-logger');
const Koa = require('koa');
const Router = require('@koa/router');
const Routes = require('./routes');
const Mongoose = require('mongoose');

const app = module.exports = new Koa();
const router = new Router();
Routes(router);

Mongoose.connect('mongodb://localhost:27017/trades');


app
    .use(logger())
    .use(router.routes())
    .listen(3000);