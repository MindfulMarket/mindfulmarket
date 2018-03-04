const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
    console.log('line 21', req.body)
    let nameParts = req.body.searchCriteria.split(' ')
    console.log(nameParts)
    let resultArray = [];
    nameParts.forEach(word =>
        Products.scope('populated').findAll({
            where: {
                name: word
            }
        })
        .then((result) => {
            console.log(result)
            resultArray.push(result) // return res.json(result)
        })
        .then(() => console.log(resultArray))

        .catch(next)
    )
})