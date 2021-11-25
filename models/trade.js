const Mongoose = require('mongoose');

const tradeSchema = new Mongoose.Schema({
  settlementDate: {
    type: Date,
    required: true
  },
  stockSymbol: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true,
  },
  stockQuantityExchanged: {
    type: Number,
    required: true
  },
  stockPrice: {
    type: Number,
    required: true
  },
  transactionTotalAmount: {
    type: Number,
    required: true
  }
});

// const tradeSchema = new Mongoose.Schema({
//   settlementDate:  Date,
//   stockSymbol:  String,
//   action: String,
//   stockQuantityExchanged: Number,
//   stockPrice: Number,
//   transactionTotalAmount: Number
// });

tradeSchema.index({
  settlementDate: 1,
  stockSymbol: 2,
  action: 3,
  stockQuantityExchanged: 4,
  stockPrice: 5,
  transactionTotalAmount: 6
})

Mongoose.model('Trade', tradeSchema);

module.exports = Mongoose.model('Trade');