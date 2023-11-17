const Trade = require('../models/trade');

let controller = {
  create: async (ctx) => {
    try {
      const { trades } = ctx.request.body;
      console.log('trades passed in: ', trades);
      const promises = [];
      trades.forEach((trade) => {
        let newTrade = new Trade(trade)
        promises.push(newTrade.save());
      })
      const results = await Promise.all(promises);
      ctx.body = results;
      ctx.status = 201;
    } catch (err) {
      console.log('err: ', err);
      ctx.throw(400, err);
    }
  },
  list: async (ctx) => {
    try {
      const trades = await Trade.find({...ctx.request.query}).exec();
      console.log('trades: ', trades);
      ctx.body = { trades: trades };
    } catch (err) {
      ctx.throw(400, err);
    }
   
  }
}

module.exports = controller;