
const router = require('express').Router()
const { Categories } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Categories.scope('populated').findAll({})
    .then((result) => res.json(result))
    .catch(next)
})
