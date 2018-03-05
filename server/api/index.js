const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/brands', require('./brands'))
router.use('/causes', require('./causes'))
router.use('/services', require('./services'))
router.use('/orders', require('./orders'))
router.use('/categories', require('./categories'))
router.use('/reviews', require('./reviews'))
router.use('/search', require('./search'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
