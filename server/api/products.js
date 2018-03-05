const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Products.scope('populated').findAll({})
    .then((result) => res.json(result))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Products.scope('populated').findById(req.params.id)
    .then(result => res.json(result))
    .catch(next)
})

router.get('/:id/reviews', (req, res, next) => {
  Products.scope('populated').findById(req.params.id)
    .then(result => {
      result.getReviews()
      .then((reviews) => {
        res.json(reviews)
      })
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Products.scope('populated').create(req.body.main)
    .then((product) => {
      let promises = []
      if (req.body.cause) promises.push(product.addCause(req.body.cause))
      if (req.body.category) promises.push(product.addCategory(req.body.category))
      Promise.all(promises)
      .then(_ => product.reload())
      .then(reloadedProduct => {
        res.json(reloadedProduct)
      })
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Products.update(req.body, { 
    where: { 
      id: req.params.id 
    },
    returning: true
  })
.then((product) => {
    let promises = []
    if (req.body.cause) promises.push(product[1][0].addCause(req.body.cause))
    if (req.body.category) promises.push(product[1][0].addCategory(req.body.category))
    Promise.all(promises)
      .then(_ => Products.scope('populated').findById(req.params.id))
      .then(reloadedProduct => {
        res.json(reloadedProduct)
      })   
  })
  .catch(next)
  })

router.delete('/:id', (req, res, next) => {
  Products.destroy({ 
    where: { 
      id: req.params.id 
    },
  })
  .catch(next)
})
