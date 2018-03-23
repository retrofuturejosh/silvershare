const Sequelize = require('sequelize')
const db = require('../db')

const Message = db.define('message', {
  contents: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.ENUM('request', 'response')
  }
})

module.exports = Message