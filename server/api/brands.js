const router = require('express').Router()
const {Brands} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Brands.findAll()
    .then(brands => res.json(brands))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Brands.create(req.body)
    .then(brand => res.json(brand))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Brands.findById()
    .then(brand => res.json(brand))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Brands.findById(req)
    .then(brand => res.json(brand))
    .catch(next)
})

router.get('/products/:id', (req, res, next) => {
  Brands.findById()
  .then(brand =>{
    brand.getProducts()
    .then(products =>{
      res.json(products)
    })
  })
    
})