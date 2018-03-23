/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
const Tool = db.model('tool')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('create user', () => {

      beforeEach(() => {
        Tool.create({
          name: 'shovel'
        })
        User.create({
          username: 'josh123',
          region: 'NYC',
          zipcode: 10036,
          email: 'Joshuadsohn@gmail.com'
        })
          .then(user => {
            console.log('seeded model')
          })
        Tool.create({
          name: 'cutting board'
        })
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
