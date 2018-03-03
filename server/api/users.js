const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  if (req.params.id !== 'undefined') {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then((result) => res.json(result))
      .catch(next)
  } else {
    console.log('put user route')
    res.sendStatus(230)
  }
})
