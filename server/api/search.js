const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
    let nameParts = req.body.searchCriteria.split(' ')
    let resultArray = [];
    nameParts.forEach(word =>
        Products.scope('populated').findAll({
            where: {
                name: word
            }
        })
        .then((result) => {
            resultArray.push(result) // return res.json(result)
        })
        .then(() => console.log(resultArray))

        .catch(next)
    )
})