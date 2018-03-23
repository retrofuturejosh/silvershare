const User = require('./user')
const Tool = require('./tool')
const Exchange = require('./exchange')
const Review = require('./review')
const Message = require('./message')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// USER ASSOCIATIONS
//  have many tools as owner
//  have many reviews
//  have many messages

User.belongsToMany(Tool, {through: 'usersProperty'})
User.belongsToMany(Review, {through: 'authorReviews'})
User.belongsToMany(Review, {through: 'revieweeReviews'})
User.belongsToMany(Message, {through: 'MessageAuthor'})

Tool.belongsTo(User, {as: 'owner'})

Exchange.belongsTo(Tool)
Exchange.belongsTo(User, {as: 'lender'})
Exchange.belongsTo(User, {as: 'borrower'})

Review.belongsTo(User, {as: 'author'})
Review.belongsTo(Exchange)

Message.belongsTo(User, {as: 'author'})
Message.belongsTo(Message, {as: 'parent'})



module.exports = {
  User,
  Tool,
  Exchange,
  Review,
  Message
}
