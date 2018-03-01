const router = require('express').Router()
const {Orders} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Orders.scope('populated').findAll()
      .then(result => res.json(result))
      .catch(next)
  })
  
  router.get('/:id', (req, res, next) => {
    Orders.scope('populated').findById(req.params.id)
      .then(result => res.json(result))
      .catch(next)
  })
  
  router.get('/:id/reviews', (req, res, next) => {
    Orders.scope('populated').findById(req.params.id)
      .then(result =>{
        result.getReviews()
        .then((reviews)=>{
          res.json(reviews)
        })
      })
      .catch(next)
  })
  
  
  router.post('/', (req, res, next) => {
    Orders.scope('populated').create(req.body)
    .then(review => res.json(review))
    .catch(next)
<<<<<<< HEAD
  })
  
  router.put('/:id', (req, res, next) => {
    Orders.update(req.body, { 
      where: { 
        id: req.params.id 
      },
    })
        .then(_ => Orders.scope('populated').findById(req.params.id))
        .catch(next)
    })
    
=======
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

>>>>>>> 1fa848dcb8a3535bbd57a2a7fd2ef2ece008dc6d

  router.delete('/:id', (req, res, next) => {
    Orders.destroy({ 
      where: { 
        id: req.params.id 
      },
    })
    .catch(next)
  })
  