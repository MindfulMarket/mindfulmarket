
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
  Causes.scope('populated').create(req.body)
    .then((cause) => {
      let promises = []
    if (req.body.removeProduct){
      Products.update({causeId: null}, {
        where: { 
          id: req.body.removeProduct
        }})
    }
    if (req.body.addProduct){
       promises.push(cause.addProduct(req.body.addProduct))
    }
    if (req.body.removeBrand){
      Brands.update({causeId: null}, {
        where: { 
          id: req.body.removeBrand
        }})
    }
    if (req.body.addBrand){
       promises.push(cause.addBrand(req.body.addBrand))
    }
    console.log('promises')
    Promise.all(promises)
      .then(reloadedCause => {
        res.json(cause)
    })
    .catch(next)
})
})



router.put('/:id', (req, res, next) => {
  Causes.update(req.body, { 
    where: { 
      id: req.params.id 
    },
    returning: true
  })
  .then((cause) => {
    let promises = []
    if (req.body.removeProduct){
      Products.update({causeId: null}, {
        where: { 
          id: req.body.removeProduct
        }})
    }
    if (req.body.addProduct){
       promises.push(cause[1][0].addProduct(req.body.addProduct))
    }
    if (req.body.removeBrand){
      Brands.update({causeId: null}, {
        where: { 
          id: req.body.removeBrand
        }})
    }
    if (req.body.addBrand){
       promises.push(cause[1][0].addBrand(req.body.addBrand))
    }
    console.log('promises')
    Promise.all(promises)
      .then(_ => Causes.scope('populated').findById(req.params.id))
      .then(reloadedCause => {
        res.json(reloadedCause)
    })   
    .catch(next)
  })
})

  

router.delete('/:id', (req, res, next) => {
  Causes.destroy({ 
    where: { 
      id: req.params.id 
    },
  })
  .catch(next)
})
