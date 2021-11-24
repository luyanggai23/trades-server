const trades = require('../controllers/trades');

module.exports = (router) => {
    router 
        .get('/trades', trades.list)
        .post('/trades', trades.create)
}