const router = require('express').Router()
const { Services } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Services.findAll({include: {all: true}})
    .then((result) => res.json(result))
})

router.get('/:id', (req, res, next) => {
    Services.findById(req.params.id, {include: {all: true}})
    .then((result) => res.json(result))
})

router.get('/:id/reviews', (req, res, next) => {
    Services.findById(req.params.id, {include: {all: true}})
    .then((result) => res.json(result.reviews))
})

router.post('/', (req, res, next) => {
    Services.create(req.body)
    .then((service) => {
        service.addCategory(req.body.category)
        service.addCause(req.body.cause)
        res.json(service)
    })
})

router.put('/:id', (req, res, next) => {
    Services.update({ where: { 
        id: req.params.id 
    },
    include: {all: true}
})
    .then((service) => {
        if (req.body.category) service.addProduct(req.body.category)
        if (req.body.cause) service.addCause(req.body.cause)
        res.json(result)
    })
})

router.delete('/:id', (req, res, next) => {
    Services.delete({ 
        where: { 
            id: req.params.id 
        },
        include: {all: true}
    })
    .then((result) => res.json(result))
})

