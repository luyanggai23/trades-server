const logger = require('koa-logger');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const Routes = require('./routes');
const Mongoose = require('mongoose');

const app = module.exports = new Koa();
const router = new Router();
Routes(router);

async function connectToMongo() {
  try {
    await Mongoose.connect(`mongodb://${process.env.mongoHost || 'localhost'}:27017/trades`);
    console.log('mongo connected successfully');
  } catch (error) {
    console.log('mongo connect error: ', error);
  }
}

connectToMongo();

Mongoose.connection.on('error', error => {
  console.log('mongoose mid connection error: ', error);
});

app
  .use(bodyParser())
  .use(logger((str, args) => {
    console.log('str: ', str);
    console.log('args: ', args);
  }))
  .use(router.routes())
  .listen(3000);