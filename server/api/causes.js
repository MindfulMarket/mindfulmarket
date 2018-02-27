const router = require('express').Router()
const { Causes } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Causes.findAll()
    .then((result) => res.json(result))
})

router.get('/:id', (req, res, next) => {
  Causes.findById(req.params.id)
    .then((result) => res.json(result))
})

router.post('/', (req, res, next) => {
  Causes.create(req.body)
    .then((result) => res.json(result))
})

router.put('/:id', (req, res, next) => {
  Causes.update({ where: { id: req.params.id } })
    .then((result) => res.json(result))
})

router.delete('/:id', (req, res, next) => {
  Causes.delete({ where: { id: req.params.id } })
    .then((result) => res.json(result))
})

