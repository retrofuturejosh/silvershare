const Sequelize = require('sequelize')
const db = require('../db')

const Exchange = db.define('exchange', {
  borrowDate: {
    type: Sequelize.DATE,
  },
  returnDate: {
    type: Sequelize.DATE,
  }
})

module.exports = Exchange