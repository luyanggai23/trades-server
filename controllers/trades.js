const { countDocuments } = require('../models/trade');
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
            ctx.status - 400;
        }
    },
    list: async (ctx) => {
        const trades = Trade.find().exec();
        ctx.body = trades;
    }
}

module.exports = controller;