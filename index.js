const logger = require('koa-logger');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const Routes = require('./routes');
const Mongoose = require('mongoose');
const cors = require('@koa/cors');

const app = module.exports = new Koa();
const router = new Router();
Routes(router);

async function connectToMongo() {
  try {
    console.log('attempting to connect to mongo...')
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
  .use(logger())
  .use(router.routes())
  .use(cors({
    origin: 'localhost:3001'
  }))
  .listen(3000);