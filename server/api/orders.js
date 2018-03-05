const router = require('express').Router()
const {Orders} = require('../db/models')
module.exports = router


  router.get('/:id', (req, res, next) => {
    if (req.params.id !== 'undefined') {
    Orders.findAll({where: {userId: req.params.id}})
      .then(result => res.json(result))
      .catch(next)
    } else {
      res.sendStatus(230)
    }
  })

  router.get('/', (req, res, next) => {
    Orders.scope('populated').findAll()
      .then(result => res.json(result))
      .catch(next)
  })

  router.post('/', (req, res, next) => {
    Orders.scope('populated').create(req.body)
    .then(review => res.json(review))
    .catch(next)
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
    

  router.delete('/:id', (req, res, next) => {
    Orders.destroy({
      where: {
        id: req.params.id
      },
    })
    .catch(next)
  })
