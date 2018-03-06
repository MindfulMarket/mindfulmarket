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
    console.log('HIT', req.body)
    User.update(req.body, {
            where: {
                id: req.body.id
            },
            returning: true
        })
        .then((user) => {
            console.log('line 24', req.body)
            return res.json(req.body)
        })
        .catch(next)
})