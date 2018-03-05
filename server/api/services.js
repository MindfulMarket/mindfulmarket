const router = require('express').Router()
const { Services } = require('../db/models')
module.exports = router


router.get('/', (req, res, next) => {
  Services.scope('populated').findAll({})
    .then((result) => res.json(result))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Services.scope('populated').findById(req.params.id)
    .then(result => res.json(result))
    .catch(next)
})

router.get('/:id/reviews', (req, res, next) => {
  Services.scope('populated').findById(req.params.id)
    .then(result => {
      result.getReviews()
      .then((reviews) => {
        res.json(reviews)
      })
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Services.scope('populated').create(req.body.main)
    .then((service) => {
      let promises = []
      if (req.body.cause) promises.push(service.addCause(req.body.cause))
      if (req.body.category) promises.push(service.addCategory(req.body.category))
      Promise.all(promises)
      .then(_ => service.reload())
      .then(reloadedService => {
        res.json(reloadedService)
      })
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Services.update(req.body, { 
    where: { 
      id: req.params.id 
    },
    returning: true
  })
.then((service) => {
    let promises = []
    if (req.body.cause) promises.push(service[1][0].addCause(req.body.cause))
    if (req.body.category) promises.push(service[1][0].addCategory(req.body.category))
    Promise.all(promises)
      .then(_ => Services.scope('populated').findById(req.params.id))
      .then(reloadedService => {
        res.json(reloadedService)
      })   
  })
  .catch(next)
  })

router.delete('/:id', (req, res, next) => {
  Services.destroy({ 
    where: { 
      id: req.params.id 
    },
  })
  .catch(next)
})
