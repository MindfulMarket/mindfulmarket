const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Products.findAll({include: {all: true}})
    .then((result) => res.json(result))
})

router.get('/:id', (req, res, next) => {
  Products.findById(req.params.id,{include: {all: true}})
    .then((result) => res.json(result))
})

router.get('/:id/reviews', (req, res, next) => {
  Products.findById(req.params.id, {include: {all: true}})
    .then((result) => res.json(result.reviews))
})

//might have to eager load
router.post('/', (req, res, next) => {
  Products.create(req.body)
    .then((result) => res.json(result))
})

router.put('/:id', (req, res, next) => {
  Products.update({ where: { 
    id: req.params.id 
  },
  include: {all: true}
})
    .then((result) => res.json(result))
})

router.delete('/:id', (req, res, next) => {
  Products.delete({ 
    where: { 
      id: req.params.id 
    },
    include: {all: true}
  })
    .then((result) => res.json(result))
})

