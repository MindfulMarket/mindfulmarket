
const router = require('express').Router()
const { Categories } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Categories.scope('populated').findAll({})
    .then((result) => res.json(result))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Categories.scope('populated').findById(req.params.id)
    .then(result => res.json(result))
    .catch(next)
})

router.get('/:id/products', (req, res, next) => {
  Categories.findById(req.params.id, {include: {all: true}})
    .then(result => {
      result.getProducts()
      .then((products) => {
        res.json(products)
      })
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Categories.scope('populated').create(req.body.main)
    .then((category) => {
      let promises = []
      if (req.body.product) promises.push(category.addProduct(req.body.product))
      if (req.body.service) promises.push(category.addService(req.body.service))
      if (req.body.brand) promises.push(category.addBrand(req.body.brand))
      Promise.all(promises)
      .then(_ => category.reload())
      .then(reloadedcategory => {
        res.json(reloadedcategory)
      })
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Categories.update(req.body.main, {
    where: {
      id: req.params.id
    },
    returning: true
  })
.then((category) => {
    let promises = []
    if (req.body.product) promises.push(category[1][0].addProduct(req.body.product))
    if (req.body.service) promises.push(category[1][0].addService(req.body.service))
    if (req.body.brand) promises.push(category[1][0].addBrand(req.body.brand))
    Promise.all(promises)
      .then(_ => Categories.scope('populated').findById(req.params.id))
      .then(reloadedCategory => {
        res.json(reloadedCategory)
      })
  })
  .catch(next)
  })

router.delete('/:id', (req, res, next) => {
  Categories.destroy({
    where: {
      id: req.params.id
    },
  })
  .catch(next)
})
