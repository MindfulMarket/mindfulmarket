const router = require('express').Router()
const {Orders} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Orders.findAll({include: {all: true}})
    .then(orders => res.json(orders))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Orders.create(req.body)
    .then(order => res.json(order))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Orders.findById({include: {all: true}})
    .then(order => res.json(order))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Orders.findById(req, {include: {all: true}})
    .then(order => res.json(order))
    .catch(next)
})


router.get('/products/:id', (req, res, next) => {
  Orders.findById({include: {all: true}})
    .then(order => {
        //we have to make this function
        res.json(order.getProducts())
    })
    .catch(next)
})