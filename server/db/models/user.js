const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  region: {
    type: Sequelize.ENUM('NYC', 'San Francisco')
  },
  zipcode: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = User
