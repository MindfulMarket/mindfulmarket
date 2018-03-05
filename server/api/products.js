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
  Products.scope('populated').create(req.body)
    .then((product) => {
      res.json(product)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  console.log('hit')
  Products.update(req.body, { 
    where: { 
      id: req.params.id 
    },
    returning: true
  })
  .then((product) => {
    res.json(product[0][1])   
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
