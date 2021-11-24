const Mongoose = require('mongoose');

const tradeSchema = new Mongoose.Schema({
    settlementDate: Date,
    amount: Number,
    stockPrice: Number,
    quantityExchanged: Number,
    stockSymbol: String,
    action: String
});

Mongoose.model('Trade', tradeSchema);

module.exports = Mongoose.model('Trade');