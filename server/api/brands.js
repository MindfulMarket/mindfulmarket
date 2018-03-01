
const router = require('express').Router()
const { Brands } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Brands.scope('populated').findAll()
    .then((result) => res.json(result))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Brands.scope('populated').findById(req.params.id)
    .then(result => res.json(result))
    .catch(next)
})

router.get('/:id/products', (req, res, next) => {
  Brands.scope('populated').findById(req.params.id)
    .then(result =>{
      result.getProducts()
      .then((products)=>{
        res.json(products)
      })
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Brands.scope('populated').create(req.body.main)
    .then((brand) => {
      let promises = []
      if (req.body.product) promises.push(brand.addProduct(req.body.product))
      if (req.body.service) promises.push(brand.addService(req.body.service))
      if (req.body.cause) promises.push(brand.addCause(req.body.cause))
      Promise.all(promises)
      .then(_ => brand.reload())
      .then(reloadedBrand => {
        res.json(reloadedBrand)
      })
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Brands.update(req.body.main, { 
    where: { 
      id: req.params.id 
    },
    returning: true
  })
.then((brand) => {
    let promises = []
    if (req.body.product) promises.push(brand[1][0].addProduct(req.body.product))
    if (req.body.service) promises.push(brand[1][0].addService(req.body.service))
    if (req.body.brand) promises.push(brand[1][0].addBrand(req.body.brand))
    Promise.all(promises)
      .then(_ => Brands.scope('populated').findById(req.params.id))
      .then(reloadedBrand => {
        res.json(reloadedBrand)
      })   
  })
  .catch(next)
  })

router.delete('/:id', (req, res, next) => {
  Brands.destroy({ 
    where: { 
      id: req.params.id 
    },
  })
  .catch(next)
})
