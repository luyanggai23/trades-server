const Trade = require('../models/trade');

let controller = {
  create: async (ctx) => {
    try {
      let trade = new Trade({
        ...ctx.request.body
      });
      trade = await trade.save();
      ctx.body = trade;
      ctx.status = 201;
    } catch (err) {
      ctx.throw(400, err);
    }
  },
  list: async (ctx) => {
    try {
      const trades = await Trade.find({...ctx.request.query}).exec();
      ctx.body = trades;
    } catch (err) {
      ctx.throw(400, err);
    }
   
  }
}

module.exports = controller;