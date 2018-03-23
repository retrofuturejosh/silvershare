const router = require('express').Router()
const {Tool} = require('../db/models')

module.exports = router

router.post('/', (req, res, next) => {
  let newTool = req.body
  Tool.create(newTool)
    .then(tool => {
      res.json(tool)
    })
    .catch(next)
})

export default router;