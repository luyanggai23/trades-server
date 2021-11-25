const Trade = require('../models/trade');

let controller = {
  create: async (ctx) => {
    try {
      // console.log('ctx.request.body: ', ctx.request.body);
      let trade = new Trade({
        ...ctx.request.body
      });
      trade = await trade.save();
      ctx.body = trade;
      ctx.status = 201;
    } catch (err) {
      // console.log('error: ', err);
      ctx.throw(400, err);
    }
  },
  list: async (ctx) => {
    const trades = await Trade.find({}).exec();
    ctx.body = trades;
  }
}

module.exports = controller;