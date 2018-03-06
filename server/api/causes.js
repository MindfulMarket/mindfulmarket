
const router = require('express').Router()
const { Causes, Products, Brands } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Causes.scope('populated').findAll({})
    .then((result) => res.json(result))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Causes.scope('populated').findById(req.params.id)
    .then(result => res.json(result))
    .catch(next)
})

router.get('/:id/products', (req, res, next) => {
  Causes.scope('populated').findById(req.params.id)
    .then(result => {
      result.getProducts()
      .then((products) => {
        res.json(products)
      })
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Causes.create(req.body)
    .then(newCause => {
      res.status(201).json(newCause)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Causes.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(updatedCause => {
      res.status(201).json(updatedCause[1][0])
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Causes.destroy({
    where: {
      id: req.params.id
    },
  })
  .then(deleted => {
    res.status(204).json(deleted)
  })
  .catch(next)
})

