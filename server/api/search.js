const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
    let nameParts = req.body.searchCriteria.split(' ')
    nameParts.forEach(word => {
        return Products.scope('populated').findAll({
                where: {
                    name: {
                        $iLike: `%${word}%`
                    }
                }
            })
            .then((result) => {
                res.send(result) // return res.json(result)
            })
            .catch(next)
    })
})
