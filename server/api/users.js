const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    console.log('HITTING ALL USERS')
    User.scope('populated').findAll({
            // explicitly select only the id and email fields - even though
            // users' passwords are encrypted, it won't help if we just
            // send everything to anyone who asks!
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'shippingAddress', 'billingAddress', 'email']
        })
        .then(users => res.json(users))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    console.log('HIT', req.body)
    User.scope('populated').update(req.body, {
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


router.post('/', (req, res, next) => {
    console.log('SMASHED', req.body)
    User.scope('populated').create(req.body)
        .then((user) => {
            return res.json(user)
        })
        .catch(next)
})