
const router = require('express').Router()
const { Reviews } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Reviews.findAll()
    .then(reviews => {
      res.json(reviews)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Reviews.create(req.body)
    .then(review => {
      res.status(201).json(review)
    })
    .catch(next)
})

