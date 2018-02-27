const router = require('express').Router()
const {Brands} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Brands.findAll({include: {all: true}})
    .then(brands => res.json(brands))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Brands.create(req.body,{include: {all: true}})
    .then(brand => res.json(brand))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Brands.findById({include: {all: true}})
    .then(brand => res.json(brand))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Brands.findById(req,{include: {all: true}})
    .then(brand => res.json(brand))
    .catch(next)
})

router.get('/products/:id', (req, res, next) => {
  Brands.findById({include: {all: true}})
  .then(brand =>{
    brand.getProducts()
    .then(products =>{
      res.json(products)
    })
  })
    
})