const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  userRating: {
    type: Sequelize.INTEGER
  },
  toolRating: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Review