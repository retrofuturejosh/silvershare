const Sequelize = require('sequelize')
const db = require('../db')

const Tool = db.define('tool', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'shared')
  },
  description: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  },
  features: {
    type: Sequelize.STRING
  }
})

module.exports = Tool