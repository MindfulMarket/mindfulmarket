const router = require('express').Router()
const { Causes } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Causes.findAll({include: {all: true}})
    .then((result) => res.json(result))
})

router.get('/:id', (req, res, next) => {
  Causes.findById(req.params.id,{include: {all: true}})
    .then((result) => res.json(result))
})

router.post('/', (req, res, next) => {
  Causes.create(req.body)
    .then((result) => res.json(result))
})

router.put('/:id', (req, res, next) => {
  Causes.update(req.body, { where: {
     id: req.params.id 
    },
    include: {all: true}
   })
    .then((cause) => {
      if (req.body.product) cause.addProduct(req.body.product)
      if (req.body.brand) cause.addBrand(req.body.brand) 
      res.json(cause)
    })
})

router.delete('/:id', (req, res, next) => {
  Causes.delete({ where: { 
    id: req.params.id 
  },
  include: {all: true}
 })
    .then((result) => res.json(result))
})

