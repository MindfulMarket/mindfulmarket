
const router = require('express').Router()
const { Causes } = require('../db/models')
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
    .then(result =>{
      result.getProducts()
      .then((products)=>{
        res.json(products)
      })
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Causes.scope('populated').create(req.body.main)
    .then((cause) => {
      let promises = []
      if (req.body.product) promises.push(cause.addProduct(req.body.product))
      if (req.body.service) promises.push(cause.addService(req.body.service))
      if (req.body.brand) promises.push(cause.addBrand(req.body.brand))
      Promise.all(promises)
      .then(_ => cause.reload())
      .then(reloadedCause => {
        res.json(reloadedCause)
      })
    })
    .catch(next)
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
    if (req.body.product){
      cause[1][0].getProducts()
        .then((products) => { 
          products.filter(product => product.dataValues.id === Number(req.body.product)).length ? 
          promises.push(cause[1][0].setProducts(products.filter(product => product.dataValues.id !== Number(req.body.product))))
          :
          promises.push(cause[1][0].addProduct(req.body.product))
        })
    }
    if (req.body.service){
      cause[1][0].getServices()
      .then((services) => { 
        services.filter(product => product.dataValues.id === Number(req.body.service)).length ? 
        promises.push(cause[1][0].setServices(services.filter(service => service.dataValues.id !== Number(req.body.service))))
        :
        promises.push(cause[1][0].addService(req.body.service))
      })
    } 
    if (req.body.brand){
      cause[1][0].getBrands()
      .then((brands) => { 
        brands.filter(product => product.dataValues.id === Number(req.body.brand)).length ? 
        promises.push(cause[1][0].setBrands(brands.filter(brand => brand.dataValues.id !== Number(req.body.brand))))
        :
        promises.push(cause[1][0].addBrand(req.body.brand))
      })
    }
    Promise.all(promises)
      .then(_ => Causes.scope('populated').findById(req.params.id))
      .then(reloadedCause => {
        res.json(reloadedCause)
      })   
  })
  .catch(next)
  })

router.delete('/:id', (req, res, next) => {
  Causes.destroy({ 
    where: { 
      id: req.params.id 
    },
  })
  .catch(next)
})
