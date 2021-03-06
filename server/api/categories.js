
const router = require('express').Router()
const { Categories } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Categories.scope('populated').findAll({})
    .then((result) => res.json(result))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Categories.scope('populated').findById(req.params.id)
    .then(result => res.json(result))
    .catch(next)
})

router.get('/:id/products', (req, res, next) => {
  Categories.findById(req.params.id, {include: {all: true}})
    .then(result => {
      result.getProducts()
      .then((products) => {
        res.json(products)
      })
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Categories.create(req.body)
    .then((category) => {
        res.status(201).json(category)
      })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Categories.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(updatedCategory => {
      res.status(201).json(updatedCategory[1][0])
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Categories.destroy({
    where: {
      id: req.params.id
    },
  })
  .then(deleted => {
    res.status(204).json(deleted)
  })
  .catch(next)
})
